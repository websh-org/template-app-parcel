# template-app-parcel
A Parcel JS template for WebShell apps 

## Quick Start

1. Copy this repo
3. Build your app in `src/app.js`
4. Edit the app's manifest in `app-manifest.json`
5. Implement the WebShell commands in `src/web-shell-app.json`
6. `npm run dev` to develop the application. Prepend `PORT=[number]` to run on a different port than 1234
8. Go to the [WebShell Sandbox](https://websh.org/sandbox)
9. In the launcher, open your app from your local url, e.g. `http://localhost:8080`
7. When ready, `npm run build` to build the application. It will be build in `./docs`, ready for publishing on GitHub Pages.
8.  Open your app from the launcher on the WebShell sandbox and use it as you please.
9.  [Tell us about it!](https://github.com/websh-org/apps/issues/new?labels=New+App&template=new-app.md)

## Note
* Your app must be a single-page app. Navigating to a different page will unload your app.
