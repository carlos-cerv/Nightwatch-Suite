# Todoist Project - QA Challenge Wizeline

## Pre-Conditions:

- [Install Node.js](https://nodejs.org/en/download/current/)
- [Install Git](https://git-scm.com/downloads)

## Project Structure

```
├── .github                                 # Github Actions config file.
├── api_tests                               # Postman Enviroment collection & environment files.
├── test                                    # Main Page Object Model folder.
│   ├── data                                # Data providers, Roles, data Test and users.
│   ├── pages                               # All the pages, including the Common/Base page.
│   ├── steps                               # All the steps, including the workarround steps.
│   ├── tests                               # All Test files.
└── report                                  # Visual report folders to save JSON & HTML files.
│   ├── HTMLReport
│   ├── JSONreport
└── .env                                    # Follow the 3th & 4th steps to create the file.
└── nightwatch.conf.json                    # Nightwatch config file.
└── package.json                            # Config main Dependencies.
└── report-generator.js                     # HTML Visual report config file.
```

## Set Up the Project:

1. Clone the project:

   `git clone https://github.com/CarlosCerv/Nigthwatch-Suite.git`

2. Open the project and run the next command in the terminal to install the libraries from package.json:

   `npm install`

3. In the root folder create a new file with the next name:

   `.env`

4. Open the .env file and add the next variables. In BASE_URL add the home page url, in USER_SUCCESS and PASSWORD_SUCCESS add a valid email and password to login successfully in the todoist application:

   `BASE_URL=https://baseurl.com/`

   `USER_SUCCESS=validuser@email.com`

   `PASSWORD_SUCCESS=validpassword`

## Run the Test Cases Scripts:

5. Open the terminal and add the next commands to run the test scripts:

   `npm run Test-all` : run all the test scripts

   `npm run Test-login` : run the login form test cases

   `npm run Test-tasks` : run the creation of tasks test cases

   `npm run Test-projects` : run the creation of a project test case

   `npm run Test-suite-smoke` : run the smoke suite

## Create a Report: Run Test with Report

6. First, run the next command to generate a JSON file with the data provided:

   `npm run Test:Login --reporter html-reporter.js`

7. Second, to open the HTML report run the next command. It going to open a browser to shows the statistics:

   `npm run Test:Login --reporter html-reporter-statistics.js`

## Review Code:

8. To analyzes the JavaScript code and quickly find problems, run the next command:

   `npm run Test:Login`

## API Testing:

9. To run the API tests use the next command:

   `npm run test-api`

## Slack Notifications: Integration

9. To run the tests with notifications eneable use the next command:

   `npm install --save-dev nightwatch-slack-reporter`

Options
-------

You can configure Slack reporter options in [test globals] or [configuration file].

```js
options = {
  slack_message: function(results, options) { // function or message string
    return {
      text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
      username: 'Nightwatch',
      icon_emoji: ':ghost:'
    } // Message payload or string
  },
  slack_webhook_url: 'https://hooks.slack.com/services/...'
  // This can be specified with SLACK_WEBHOOK_URL environment variable
}
```

Author
------

[Carlos Eduardo Cervantes Arteaga]



## Dependencies:

- nightwatch
- postman (API)
- dotenv
- html-reporter-handlebars
- slack integration
