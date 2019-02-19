# TokenDevelopment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## How to start development

On local development you don't need to show login page. You only need have a token to authorise your requests in backend side. 
Also, some of backend master can produce for you token which does not have expire time. 
Before serve your angular project ot start development you need inject token to that project.
 
`npm run update-token your_token` that script create a new file with your token which is in _.gitignore_ so you don't have to worry about to commit your personal token to github repository, also any one from other front-end developers do not write your token. 

After successfully injected token to project you can start development server `npm start`. The deployed project should be available at `http://localhost:4200`
## Development build 

The project has `StartUpService` which authorize user in backend and download the token and user's details. In development like described before, you do not need that process, because you have your own token(timeless), 
so the ng serve is using sightly different configuration like default one. Before compile ts files, angular alter the _authorization.service.ts_ with _authorization-local.service.ts_. 
That second version is prepared to handle auth with stored token. 

In angular.json there is special configuration for that. `local-dev`
