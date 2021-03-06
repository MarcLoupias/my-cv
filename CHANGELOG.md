# CHANGELOG

## 1.0.0 (2018/10/08)

- old AngularJS webapp removed
- replaced by [jsonresume.org](https://jsonresume.org) based website with [jsonresume-theme-developpez](https://github.com/MarcLoupias/jsonresume-theme-developpez) theme
- resume data update

## 0.4.0 (2017/06/05)

### devDependencies
- upgrade gulp to v4 (branch not released yet)
- upgrade gulp-hub to branch registry-init

### environnement
- upgrade node to v6
- upgrade npm to v5+
- fixed shrinkwrap breaking change due to npm upgrade

### devops
- updating travis config

### data
- gitbook memo-dev project added to devfolio section
- age ;)

## 0.3.2 (2016/12/16)

- layout fixes for burger-menu on mobile viewports
- w3c validation changes in index.html

## 0.3.1 (2016/12/16)

- missing conf changes :'(

## 0.3.0 (2016/12/16)

### dependencies
- add [angular-google-analytics](https://github.com/revolunet/angular-google-analytics) `1.1.7`

### Google Analytics
- tracking on routes only
- tracking disabled for unit tests and dev mode

## 0.2.0 (2016/12/15)

### scaffold
- changing yeoman generator from [generator-angular](https://github.com/yeoman/generator-angular) to [fountain-webapp](https://github.com/FountainJS/generator-fountain-webapp)

### devops
- code coverage with [coveralls.io](https://coveralls.io/github/MarcLoupias/my-cv)
- [Travis CI](https://travis-ci.org/MarcLoupias/my-cv) config

### dependencies
- [angular](https://angularjs.org/) from `1.2.6` to `1.6.0`
- [angular-ui](https://angular-ui.github.io/bootstrap/) from `0.10.0` to `2.2.0`
- [bootstrap](http://getbootstrap.com/) from `3.0.3` to `3.3.7`

### refactoring
- refactoring folders scaffolding from file type based to feature based.
  Cf [John Papa angular-styleguide Y152](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y152)
- refactoring js sources files :
    - [IIFE : Y010](https://github.com/johnpapa/angular-styleguide/tree/master/a1#iife)
    - [Named functions : Y024](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y024)
    - [Manual dependencies identification : Y091](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y091)
    - controllerAs syntax with vm : [Y030](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y030) [Y031](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y031) [Y032](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y032)
    - [Unique Directive Prefix (`cv-`) : Y073](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y073)
    - [Directives and ControllerAs : Y075](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y075)
    - [Feature File Names : Y121](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y121)
    - [Factory and Service Names : Y125](https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y125)
    - externalize directives templates into separated html files
- refactoring data calls, controllers impl, add some logs, loader handling

## 0.1.4 (2014/03/04)

- responsive design changes for small devices. On main page for small devices, skills and education column are hidden.
  On others general informations are hidden.
- photo url is now in data.json instead of hard coded in index.html
- devfolio is angularised
- google analytics

## 0.1.3 (2014/03/03)

- first working version

## 0.1.0 (2014/02/27)

- first commited version
