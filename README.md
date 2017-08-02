# App Master

App Master is the source code for the Priority Master application. Priority Master is a template for applications generated via Priority Mobile Application Generator. 
You can find us at [Google Play](https://play.google.com/store/apps/details?id=com.priority_software.template) and at [App Store](https://itunes.apple.com/na/app/priority-master/id1229667825?mt=8).

Priority Master harnesses the power of [priority-web-sdk](https://prioritysoftware.github.io/api/) and [priority-ionic](https://github.com/PrioritySoftware/priority-ionic) to build a mobile friendly application for Priority users. Now you can have **your** Priority with you at all times.

### Contributing

You're more than welcome to contribute by [opening an issue](/issues/new) or submitting a pull request with your fixes or additions.

Setup:
 1. Fork and clone the repo.
 2. Install dependencies. Run `$ npm install`.
 3. Run locally:
     - Copy one of the json files generated via Priority Mobile Application Generator to `src/assets/js` and rename it to `pridata.json`. Or write your own `pridata.json`.
     - Make sure to add your proxies to `ionic.config.json` to avoid CORS.
     - Run `ionic serve`.