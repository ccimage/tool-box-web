# Online use
Open the link use the tools [https://ccimage.github.io](ccimage.github.io)

# vscode extension
> [Tool box for developers](https://marketplace.visualstudio.com/items?itemName=ccimage.dev-toolbox)
> or
> search dev-toolbox in vscode extensions


# Developers

Welcome to create pr.

Compatible with Quasar UI v2 and Vue 3.

## Structure
* [/ui](ui) - a web app
* [/extension](extension) - extension for vscode (compile from ui)

## Contributor
> requires:  nodejs 16+, yarn, quasar cli
```
cd ui
yarn install
cd ui/dev
quasar dev
```
### deploy
```
cd ui/dev
quasar build
# files create at ui/dev/dist
```
deploy extension
```
cp -r ui/dev/dist/* extension/toolbox/media
cd extension/toolbox
yarn install
vsce publish 
```

# License
MIT (c) ccimage
