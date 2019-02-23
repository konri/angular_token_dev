# TokenDevelopment
This project is boilerplate for easily start developing angular page with authorization. On your local workspace, you don't need to show login page. What's more, constantly entering your login and password can be annoying. In most cases, when your system is connecting to secured backend, only need a valid token. 
Also, some of backend master can produce a token which does not have expire time. So simply you inject the token once at the project. You don't have to remember any credentials. Very often you have couple of tokens for tester users to check all cases.
 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## How to start development
First step is to clone the project into your workspace. 
To be sure that you won't paste your changes to file where token is, please do that command: ` git update-index --skip-worktree src/local-development/local-token.ts `
Before serve your angular project ot start development you need inject token to that project.
 `npm run update-token your_token` that script replace token in local-development file.   
After successfully injected token to project you can start development server `npm start`. The deployed project should be available at `http://localhost:4200`

## Development build 

The project has `StartUpService` which authorize user in backend and download the token and user's details. In development like described before, you do not need that process, because you have your own token(timeless), 
so the ng serve is using sightly different configuration like default one. Before compile ts files, angular alter the _authorization.service.ts_ with _authorization-local.service.ts_. 
That second version is prepared to handle auth with stored token. 

In angular.json there is special configuration for that. `local-dev`
