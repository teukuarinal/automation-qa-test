# Login Functionality Testing with Cypress

## Objective
The objective of this task is to create and execute test cases for testing the login functionality of a web application using Cypress.

## Test Cases
1. User successfully login with valid credentials
2. User see error message when login with invalid credentials
3. User see error message when login with empty credentials
4. User can clear the text from the field after failed login
5. Login component elements are present

## Instructions

1. **Install Node.js:**
   - Download and install Node.js from the [official website](https://nodejs.org/).

2. **Clone the Repository:**
   - Clone or download the repository from GitHub using the following command:
     ```
     git clone <repository-url>
     ```

3. **Start the Node Server:**
   - Navigate to the project directory in your terminal or command prompt.
   - Run the following command to start the Node.js server:
     ```
     node index.js
     ```

4. **Access the Login Page:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to ensure the login page of the web application is working.

5. **Set Up Cypress:**
   - Ensure that Cypress is installed as a dev dependency. If not, install it using the following command:
     ```
     npm install cypress --save-dev
     ```

6. **Execute Test Cases:**
   - To execute the test cases from the terminal, run the following command:
     ```
     npx cypress run
     ```
     This command will run all your Cypress tests headlessly in the terminal.

   - Alternatively, you can open the Cypress Test Runner UI by running the following command in your terminal:
     ```
     npx cypress open
     ```
     Once Cypress Test Runner is launched, select E2E Testing and choose the browser.
     Then you can select and run individual test scenarios interactively. This allows you to view the tests as they run in real-time and debug any issues.

   - After the test execution is complete, Cypress will generate test result logs.
