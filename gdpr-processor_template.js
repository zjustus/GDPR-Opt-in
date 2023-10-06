const updateConsentState = require('updateConsentState');
const callInWindow = require('callInWindow');

const consentChange = (consentObjecgt) => {
	log("Consent has been updated");
	updateConsentState(consentObjecgt);
};

callInWindow('consentUpdate', consentChange);
data.gtmOnSuccess();