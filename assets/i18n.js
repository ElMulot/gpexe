import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Backend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';

i18next
	.use(Backend)
	.init({
		lng: document.documentElement.getAttribute('lang') || 'fr_FR',
		fallbackLng: document.documentElement.getAttribute('lang') || 'fr_FR',
		debug: true,
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json'
		}
	});

export default i18next;