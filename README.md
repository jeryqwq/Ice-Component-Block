# Custom ICE Materials and Doc

[Docs Ice](https://ice.work/docs/materials/about).
[Docs npm](https://verdaccio.org).
[Docs storyBook-doc](https://storybook.js.org).


[npm package](http://192.168.4.145:8001).
[component Doc](http://192.168.4.145:8080/storybook-static/?path=/story/动态排名组件--基础配置).


## Install iceworks

```bash
$ npm i -g iceworks
$ iceworks --help
```

## Install Deps

```bash
$ npm install
```

## Develop materials

```bash
# block
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# component
$ cd blocks/ExampleBlock
$ npm install
$ npm run start
```

## Add new material

```bash
$ iceworks add  # select block|component|scaffold
```

## Generate materials data

```bash
$ iceworks generate
```

## Publish materials data

```bash
# sync to fusion material center
$ iceworks sync
```

## Use materials in iceworks

Add the materials data url to iceworks.

# Doc

## run Document

```bash
npm run doc
```

## build Doc

```bash
npm run build-doc
```

## publish package

```bash
  npm publish
```

## unpublish package

```bash
npm unpublish [pageageName] --force 
```

## 