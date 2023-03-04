# ChallengeAngularApplyDigital

**Context:** We would like you to build a small responsive web application to test your knowledge of Front End Development and related technologies.

The design details and specifications like font family, size, colors, etc., as well as the assets to build the UI, are available on Zeplin using the following information:

The design details and specifications like font family, size, colors, etc., as well as the assets to build the UI, are available on Zeplin using the following information:

- Project: [https://zpl.io/2vJKgqQ](https://zpl.io/2vJKgqQ)
- User: recruitment@reign.cl
- Password: reignrecruitment!

## STACK

You must use the following technologies to build the app:

- The latest version of the frameworks: React or Angular
- HTML/CSS only for building the UI components
- Deployment of the web app on Netlify from your Git repository using the New Site
  from Git workflow

## API

The web application must request data to the Hackers [News public API](https://hn.algolia.com/api). The dropdown selector component should use the URL parameter “query” from the “search by date”

API in order to filter the posts, for example:

- Angular: [https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0](https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0)
- React: [https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0](https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0)
- Vuejs: [https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0](https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0)

The pagination should be implemented using the “page” URL parameter from this API.

The attributes to use for the post UI are author, story_title, story_url, created_at. If any of these attributes are not present in the object response, the post should be discarded from the data.

## FUNCTIONALITY

- The selected filter should persist on the local storage
- The favorited posts should persist on the local storage
- The web app is expected to work as a responsive web application
- If you decide to implement the pagination component, it should behave like this one: [https://material-ui.com/components/pagination/](https://material-ui.com/components/pagination/)
- When clicking on the row, a new tab should be open with the link of the post (story_url)
- Clicking on the “like button” should not trigger the opening of the post URL link
- When hovering on the row, apply opacity to the entire row and its children (texts, icons, like button, etc)

## BONUS

* Implement unit testing
* Good use of Typescript
* Pagination as infinite scroll

## WHAT WILL BE EVALUATED

* Documentation
* Testing
* Clean code
* Software design
* Git history
* Solution deployed

## DELIVERABLES

* Netlify link to the deployed web application
* Public GitHub / GitLab / Bitbucket repository URL

---

## Others

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
