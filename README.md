# Mono CRA

Managing UI components, common settings and application projects with Lerna.

## File Structure

```
packages/
  app/
  common-settings/
  ui-base/
```

* `app/` - application project built with [CRA](https://github.com/facebook/create-react-app), you can use this package as starter project.
* `common-settings/` - unite the configuration.
* `ui-base/` - style guide serve by [styleguidist](https://github.com/styleguidist/react-styleguidist), also you can build standalone version for other repo.

## Usage

Install required dependencies and create symlink between repos.

`/`

```
yarn global add lerna && yarn start
```

### Launch Styleguidist Server

`packages/ui-base/`

```
yarn start
```

Visit `http://localhost:6060`

### Build Standalone Library

`packages/ui-base/`

```
yarn build
```

Check out `packages/ui-base/dist/ui-base.js`

### Launch Dev Server

`packages/app/`

```
yarn start
```

Visit `http://localhost:3000`
