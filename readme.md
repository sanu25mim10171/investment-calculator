💰 Comprehensive Investment Calculator (Python)

This project is a command-line Python program designed to calculate the future value of investments, supporting both single lump-sum deposits and regular monthly contributions.

It is a helpful tool for personal finance modeling and understanding the power of compound interest and regular savings.

🌟 Features

->Two Calculation Modes:

  1. Lump-Sum Investment: Calculates the future value of a single initial deposit, compounded annually.

  2. Investment with Contributions: Calculates the future value of an initial deposit combined with a fixed, regular monthly contribution, compounded monthly.

->Robust Input Handling: The script ensures all user inputs (Principal, Rate, Years, Contributions) are valid, non-negative numeric values.

->Detailed Financial Output: Clearly displays the initial investment, total money contributed, future value, and total interest earned.

->Clear Structure: Uses separate, well-commented functions for each calculation mode.

🚀 Getting Started

Prerequisites

Python 3.x installed on your system.

How to Run:

1. Save the provided code as a Python file (e.g., investment_calculator.py).

2. Open your terminal or command prompt (CMD, PowerShell, or VS Code Terminal).

3. Navigate to the directory where you saved the file.

4. Run the script using the Python interpreter:
   python investment_calculator.py

5. Follow the interactive prompts to select the calculation mode and enter your investment details.

📊 Calculation Details

1. Lump-Sum Investment Mode (calculate_future_value)

This mode calculates the final value of a single initial deposit compounded annually.

Formula Used:


$$A = P (1 + r)^t$$


Where $A$ is the final amount, $P$ is the principal, $r$ is the annual rate (as a decimal), and $t$ is the number of years.

2. Investment with Monthly Contributions Mode (calculate_future_value_with_contributions)

This mode calculates the combined future value of the initial principal (compounded monthly) and the annuity created by the regular monthly contributions (compounded monthly).

Formula Used:


$$\text{FV} = \underbrace{P \left(1 + \frac{r}{n}\right)^{nt}}_{\text{Future Value of Principal}} + \underbrace{\text{PMT} \left[ \frac{\left(1 + \frac{r}{n}\right)^{nt} - 1}{\frac{r}{n}} \right]}_{\text{Future Value of Annuity (Contributions)}}$$


Where $n=12$ (monthly compounding) and $PMT$ is the monthly contribution.


If you re-installed Python, make sure you checked the box "Add python.exe to PATH" during installation.

If these steps are completed, running the script in your terminal should execute the program successfully.

