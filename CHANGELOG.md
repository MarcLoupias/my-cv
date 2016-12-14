# CHANGELOG

## 0.2.0 (2016/12/XX)

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
