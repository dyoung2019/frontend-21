# frontend-21

> ✨ Bootstrapped with Create Snowpack App (CSA).


1. Setup a snowpack development workspace

```bash
# snowpack 
npx create-snowpack-app new-dir --template @snowpack/app-template-preact-typescript
# move into local folder
cd new-dir

# add postcss
npm install --save-dev @snowpack/plugin-postcss postcss postcss-cli

#  add postcss config
touch postcss.config.js
```

2. Modify snowpack.config.js

```json
// snowpack.config.json
{
  "plugins": [
    ...
    "@snowpack/plugin-postcss"
  ]
}
```

3. Setup tailwind.css

```bash
npm install --save-dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```

4. Setup your postcss.config.js file for tailwind.css

```js
// postcss.config.js
 module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

5. DONE! Now start dev server

```bash
# start dev server
npm start

```

### Features

- snowpack
- preact
- typescript
- postcss
- tailwind.css


### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds the app for production to the `build/` folder.
It correctly bundles Preact in production mode and optimizes the build for the best performance.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
