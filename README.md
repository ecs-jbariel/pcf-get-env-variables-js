# PCF Get Environment Variables
Simple NodeJS app that will display the environment variables for a given application name.

## Required Environment Variables for a PCF Deploy
If you are deploying this into PCF, you must provide the following environment variables.

* `APP_NAMES` => Name(s) of app(s), to not show the environment variables for (especially as there are admin credentials)  Provided as an array such as `['frank','joe','bob']`
* `API_PROTOCOL` => `http` or `https`
* `API_HOST` => Set to the API endpoint - typically `api.<systemDomain>`
* `API_USERNAME` => Set to an API admin, typically `admin`
* `API_PASSWORD` => Set to the password for the given `API_USERNAME`
* `SKIP_SSL_VALIDATION` => Set to `true` when using self-signed certs
* `PORT` => Port the app should run on

### Clone and run

It's very simple to get this project up and running:

* Clone the repo
* Install dependencies `npm install`
* Configure your `props.json`
* Run the project `node index.js`

## JS CFClient
This project is based on the [js-cfclient](https://github.com/ecs-jbariel/js-cfclient) NPM.  See more information there.

You can also see other examples in the [cfclient-server-js](https://github.com/ecs-jbariel/cfclient-server-js) project.

# Issues
Please use the [Issues tab](../../issues) to report any problems or feature requests.
