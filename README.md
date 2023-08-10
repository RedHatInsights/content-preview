[![Build Status](https://app.travis-ci.com/RedHatInsights/content-preview.svg?branch=master)](https://app.travis-ci.com/RedHatInsights/content-preview)
# Content Preview

Content Preview lists available rules (recommendations) for Advisor (both OCP and RHEL) and helps to preview them by rendering with the same components used in production applications (console.redhat.com). The application also allows to alter the markdown files in order to test the rules with different content.

## Quick start

Before following the instruction, you have to be connected Red Hat internal VPN. If you see security cert issues in the network tab (that breaks app rendering horribly), be sure to add a server exception for `10.72.32.104:8090`.

1. Run ```npm install``` to install npm dependencies required to deploy this application locally,
2. Run ```npm run start```; the script starts webpack bundler and serves the files with webpack dev server,
3. The development server should automatically open `http://localhost:8080` in your browser — this is the page where you will find the app.

## Building production assets

Instead of using `npm run start` (which is preferred for the local development environment), you should run `npm run build` in order to build all the assets specifically for production. It contains optimizations that help to load the application faster. You will find the generated assets in the `dist` folder.