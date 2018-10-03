
# my-cv

[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://wtfpl.net)
[![Build Status](https://travis-ci.org/MarcLoupias/my-cv.svg?branch=master)](https://travis-ci.org/MarcLoupias/my-cv)

Published @ http://cv.marc-loupias.fr

## scaffold

It uses [jsonresume](https://jsonresume.org) with [jsonresume-theme-developpez](https://github.com/MarcLoupias/jsonresume-theme-developpez).

## i18n

It is a french résumé.

## data

Data in the website are provided by `resume.json` file based on [the related json schema](https://jsonresume.org/schema/).

## usage

Installation : `npm install`

Test the json file against the jsonresume schema : `npm test`

Build the website : `npm run-script build`

Test the build manually : `npm run-script check-build`

Build a pdf version of the website : `npm run-script build-pdf`
