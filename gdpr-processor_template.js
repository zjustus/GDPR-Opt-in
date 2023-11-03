const setDefaultConsentState = require('setDefaultConsentState');
const updateConsentState = require('updateConsentState');
const callInWindow = require('callInWindow');

setDefaultConsentState({
	'ad_storage': 'denied',
	'analytics_storage': 'granted',
	'functionality_storage': 'granted',
	'personalization_storage': 'granted',
	'security_storage': 'granted',
	'wait_for_update': 500
});

const consentChange = (consentObjecgt) => {
	updateConsentState(consentObjecgt);
};

callInWindow('consentUpdate', consentChange);
callInWindow('showConsentBanner');
data.gtmOnSuccess();