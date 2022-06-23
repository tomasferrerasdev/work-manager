This Guide / Doc is still in progress keep coming to check updates ✅✅✅

# Initial project config
- Engine Locking
    -.nvmrc
    -.npmrc
- Code Formatting and Quality Tools
    - eslint
    - prettier
- Git Hooks with husky
- VS Code Configuration
- Debugging

## Project Setup
We'll just begin by following NextJS docs and creating a default Next.js application with a Typescript template.
```
npx create-next-app --ts your-app-name

cd your-app-name
```
recommended to run build to verify that everything keeps working
```
yarn build
```
## Engine Locking
We would like for all developers working on this project to use the same Node engine and package manager in order not to cause collisions and incompatibilities.
- **.nvmrc** tell other uses of the project which version of Node is used.
- **.npmrc** tell other users of the project which package manager is used.

**.nvmrc**
```
lts/fermium
```
**.npmrc**
```
engine-strict=true
```
Note that the use of engine-strict didn't specifically say anything about yarn, we should do that in package.json to make it work:
**.package.json**
```
"name": "your-app-name",
  "author": "YOUR_NAME",
  "description": "app description, something like: initial NextJS and TS Setup ",
  "version": "0.1.0",
  "private": true,
  "license" : "MIT"
  "homepage": "your_repo_url"
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
  ...
```


