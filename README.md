# GDPR-Opt-in
A Google Tag Manager Script designed to put a GDPR-compliant banner on any website. It has the ability to add additional options and work with any tracking API to prevent the use of tracking

*Limitations*  
Google tag manager cannot use session start as a trigger; This script gets around it but is not a perfect solution.



Create a new User Defined Variable
Type: Data Layer Variable
Name: consentStates


Todo:
On page load, form is displayed
on form sumbut the dataLayer is updated {consentStates}
- 
create a trigger that fires when the form is submitted
trigger will fire a tag
the tag is based on a template
the template will read the dataLayer {consentStates} and update the google consent states via the API

TODO:
- 
- send data to google tag manager
- send data to meta pixel
- send data to VWO
