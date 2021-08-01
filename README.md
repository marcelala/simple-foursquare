#Simple Square

##Overview

Simple Square is a React.js single page web application where users can input a location query (latitude,longitude) and find venues nearby. This application is powered by Foursquare.

## Table of Contents

* [Overview](#overview)
* [Specification](#specification)
* [How to run the project](#how-to-run-the-project)
* [Dependencies](#dependencies-&-tools-used)
* [APIs Used](#apis-used)

## Specification

The goal of this project was to build a simple single page application to consume Foursquare's Places API using React.
## How to run the project

To run the project in the **development mode**, follow the instructions below: 

Download or clone the repository in your computer:
```
$ git clone https://github.com/marcelala/simple-square.git
```

In the repository folder: 
* install project dependencies with 
```
npm install
```
* start the development server with 
```
npm start
```
* open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies & Tools Used

* As a project generated with `create-react-app`, it includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency.
* The project setup also uses [Webpack](https://webpack.js.org/) for handling all assets, as Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript.
* [axios](https://github.com/axios/axios), a promise based HTTP client for the browser and node.js.
* [Material-UI](https://github.com/mui-org/material-ui)
## APIs used
* Places API by FourSquare: the [Get Venue Recommendations](https://developer.foursquare.com/docs/api/venues/explore) returns a list of recommended venues near the current location.
## Credits & Helpful Links

* The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more information on how to perform common tasks, visit [this page](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
