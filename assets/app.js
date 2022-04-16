import { startStimulusApp } from '@symfony/stimulus-bridge';
import { defineCustomElement } from 'vue';

// CSS import
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
import 'helpers/bootstrap_helper';
import 'helpers/turbo_helper';
// import 'helpers/turbo_debug';