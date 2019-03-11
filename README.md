# Mono CRA

Managing UI components and application projects with Lerna.

## File Structure

```
packages/
  app/
  ui-base/
```

* `app/` - application project built with [CRA](https://github.com/facebook/create-react-app), you can use this package as starter project.
* `ui-base/` - style guide serve by [styleguidist](https://github.com/styleguidist/react-styleguidist), also you can build standalone version library.

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

### Build Standalone Library (watch mode)

`packages/ui-base/`

```
yarn dev
```

It will regenerate  `packages/ui-base/dist/ui-base.js` every time you make a change.

### Launch Dev Server

Assume your API server is launching on port 3333, you have to change proxy setting.

`packages/builder/package.json`

```
"proxy": "http://localhost:3333"
```

Now you can launch developmet server.

`packages/app/`

```
yarn start
```

Visit `http://localhost:3000`
