# tc-eslint-config

Standard sharable TC extension of airbnb's excellent eslint configuration.

## Usage

Installing this package will also install the appropriate version of eslint and the base airbnb configuration to match the configured rules.

```
npm i -D conversation/tc-eslint-config#0.0.2
```

Create an `.eslintrc.js` in the root directory of the project you are intending to use eslint with, insert the following:

```js
module.exports = require("tc-eslint-config");
```

Then finally, add some npm scripts to the package.json of your project for convenience.

```js
"scripts": {
  "lint": "eslint 'app/assets/javascripts/**/*.js",
  "lint:autofix": "eslint 'app/assets/javascripts/**/*.js' --fix"
}
```

Now you can just execute:
```
npm run lint
```

## Adding and removing rules

Be sure to discuss with the rest of the team before modifying rules. The easiest way is to create a pull request with examples and reasons why you want to make the change.

## Making changes

You'll want to save the exact version of the package you are upgrading so that we don't automatically download new minor versions and introduce new violations accidentally.

For example, to upgrade eslint to 4.19.0:

```
npm i --save-exact eslint@4.19.0
```

If you choose to upgrade dependencies or change the rules, you should also bump the minor version, and push up a new tag matching the latest version. If there are drastic changes, consider bumping the major version.

```
git commit -m "Prepare to release 7.6.5"
git tag -a 7.6.5 -m "7.6.5"
git push origin 7.6.5
```

Then you can upgrade each project to use that new version:
```
npm i -D conversation/tc-eslint-config#7.6.5
```
