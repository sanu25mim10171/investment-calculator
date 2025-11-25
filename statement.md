Project Statement: Comprehensive Investment Calculator

Overview and Purpose

This project is a command-line utility, developed in Python, designed for accessible and precise financial modeling. The primary goal is to empower users, especially students and novice investors, to visualize and calculate the future value of their savings under different investment scenarios.

The calculator's core strength lies in its transparent, formula-driven approach and robust input handling, making the principles of compounding easily understandable.

Key Features and Calculation Modes

The program supports two primary modes of investment calculation:

1. Lump-Sum Investment:

   Description: Calculates the future value of a single, upfront deposit.

   Compounding: Annual.

   Formula: $A = P (1 + r)^t$

2. Investment with Monthly Contributions (Annuity Model):

   Description: Models a scenario involving an initial principal plus continuous, regular monthly contributions (Dollar-Cost Averaging).

   Compounding: Monthly ($n=12$).

  Formula:


  $$\text{FV} = P \left(1 + \frac{r}{n}\right)^{nt} + \text{PMT} \left[ \frac{\left(1 + \frac{r}{n}\right)^{nt} - 1}{\frac{r}{n}} \right]$$

Technical Details:

  Developed in:        Python 3.x (Standard Library)

  Dependencies:        None (Uses only built-in functions)

  Core Functions:      calculate_future_value(), calculate_future_value_with_contributions(), get_valid_input()

  Submission Context:  VIT Bhopal, Branch: Artificial Intelligence, Slot: A11 + A12 + A13

  Submitted By:        Sanu Singh (Reg. No: 25MIM10171)

  Submitted To:        Dr. Pavithra Mam

Getting Started:

To run the calculator, execute the script in your terminal:

python investment_calculator.py
