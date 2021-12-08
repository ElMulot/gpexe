import i18next from 'i18next';

const locale = document.documentElement.getAttribute('lang') || 'fr_FR';

i18next
	.init({
		lng: locale,
		fallbackLng: 'fr_FR',
		debug: false,
		resources: Object.assign(
				{
					[locale]: {
						translation: require(`./locales/${locale}.json`),
					}
				},
				{
					'fr_FR': {
						translation: require('./locales/fr_FR.json'),
					}
				})

	});

export default i18next;