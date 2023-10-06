# GDPR-Opt-in
A Google Tag Manager Script designed to put a GDPR-compliant banner on any website. It has the ability to add additional options and work with any tracking API to prevent the use of tracking

*Limitations*  
Google tag manager cannot use session start as a trigger; This script gets around it but is not a perfect solution.


# How to Install
**Step 1.**
Create a new folder to contain the following things

**Step 2.**
Create a new Custom HTML Tag
Copy the text from gdpr-banner_tag.html
that fires on every page view

**Step 3.**
Create a new Tag Template
Copy the text from gdpr-processor_template.js

**Step 4.**
Set Tag Template Permissions
Access Consent State - All Content types, Read and Write
Global Variables - {consentUpdate: [Execute]}

**Step 5.**
Create a new Tag based on the previously created template
fire after first tag is executed

**Step 6.**
Test the full enviorment

TODO:
- 
- send data to google tag manager
- send data to meta pixel
- send data to VWO
