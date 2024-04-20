# Login Functionality Testing with Cypress

## Objective
The objective of this task is to create and execute test cases for testing the login functionality of a web application using Cypress.

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
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the login page of the web application.

5. **Set Up Cypress:**
   - Ensure that Cypress is installed as a dev dependency. If not, install it using the following command:
     ```
     npm install cypress --save-dev
     ```

6. **Write and Execute Test Cases:**
   - Write clear and concise test scripts using Cypress' syntax to validate the login functionality based on the provided scenarios:
     - Positive test case: Should login successfully with valid credentials.
     - Negative test case: Should display an error message when logging in with invalid credentials.
     - Boundary test case: Should display an error message when logging in with empty credentials.
     - Additional test scenarios can be explored to demonstrate testing skills.
   - Execute the test cases using Cypress and ensure they pass or fail as expected.

## Submission
- Submit your Cypress test scripts along with the test report to your GitHub repository.
- Ensure that your submission includes clear instructions on how to run the tests.
