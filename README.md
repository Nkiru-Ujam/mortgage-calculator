Mortgage Calculator

This project is a simple mortgage calculator built using HTML, Sass, and JavaScript.
The calculator allows users to input their loan amount, interest rate, and loan term to calculate their monthly payments and total interest paid over the term of the loan.

Features

- Loan Amount Input: Users can enter the total loan amount.
- Interest Rate Input: Users can input the annual interest rate.
- Loan Term Input: Users can specify the loan term in years.
- Monthly Payment Calculation: The calculator computes the monthly payment based on the input values.
- Total Interest Calculation: Displays the total interest paid over the entire loan term.
- Responsive Design: Uses Sass for styling to make the calculator responsive and user-friendly on different devices.
  
How to Use

- Enter the loan amount in the input field (e.g., $100,000).
- Enter the annual interest rate (e.g., 4.5%).
- Enter the loan term in years (e.g., 30 years).
- Click the Calculate button to compute:
Monthly mortgage payment.
Total interest paid over the life of the loan.
The results will be displayed immediately on the right hand side of the UI

Getting Started
1. Clone the repository https://github.com/Nkiru-Ujam/mortgage-calculator.git

Technologies Used

- HTML: For structuring the calculator UI.
- Sass: A CSS preprocessor used for styling the calculator.
- JavaScript: For performing the mortgage calculations and handling user input.

How to Compile Sass

Install Sass (if not already installed):
npm install -g sass
Run Sass in watch mode to compile the .scss file into the dist folder:
sass --watch src/index.scss:dist/index.css
This command will monitor the src/index.scss file and automatically compile changes to dist/index.css.
