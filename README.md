# Module Build Service User Interface (MBS-UI)

A simple frontend to the Module Build Service written in Angular.

## Development

To setup a development environment, make sure you have `npm` installed.

Once npm is installed:
* Run `npm install` to install the dev and production dependencies
* Run `ng serve` to start the development server
* In your browser, you can now navigate to `http://localhost:4200/`

## Build

Although it's recommended to use OpenShift for builds and deployments, you can
manaully build MBS-UI for production with
`ng build --environment <environment_name>`. The build artifacts will be stored
in the `dist/` directory.

## Deployment

The recommended deployment method is OpenShift. The easiest way is to use the
OpenShift template provided in `openshift/mbs-ui-deployment-template.yaml` by
running `oc new-app mbs-ui-deployment-template.yaml -p NG_ENVIRONMENT=<environment_name>`.
You can override the route's hostname/FQDN with the `ROUTE_HOSTNAME` parameter.

Alternatively, you can do the more manual approach with the following steps:
* Add the S2I builder image for Angular apps with:
  `oc create -f https://raw.githubusercontent.com/mprahl/s2i-angular-httpd24/master/s2i-angular-httpd24.yml`
* Build and deploy the application with:
  `oc new-app s2i-angular-httpd24~https://github.com/release-engineering/mbs-ui --build-env NG_ENVIRONMENT=<environment_name>`
* Create a route with:
  `oc expose svc/mbs-ui --port 8080`
* Perform any additional configuration such as adding readiness and health
  probes
