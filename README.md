# Loan Interest Calculator - A react app

Calculates interest rate and monthly payment depending upon amount and loan duration.

### Live at =>>  https://sshekhar336.github.io/LoanInterestCalculator-react/

## Features

- A user interface to select the monetary amount and loan duration which then displays the interest rate and the monthly payment.
- The loan amount should be between $500 and $5000 and the loan duration between 6 and 24 months.
- The following API is used for calculation - https://ftl-frontend-test.herokuapp.com/interest?amount=<amount>&numMonths=<numMonths>
- This returns a JSON object with information about the monthly payment and the interest rates.
- The calculated values is automatically updated as the slider is used - without requiring any further interaction by the user.
- It also user local storage to store the search history and result which helps user to directly access the result without making any api calls.
  
### Prerequisites

- Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org).
- axios are used for api calls. To get axios, run 'npm install axios' in terminal.
- Uses only ReactJs and javascript.
- No other libraries are used.

## Built With

- [React.JS](https://reactjs.org/) -Frontend library used in the project.

## Author

- **Shashank Shekhar** - (https://github.com/sshekhar336)
  
  
