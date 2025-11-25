def calculate_future_value(principal, rate, years):
    try:
       
        rate_decimal = rate / 100.0

        final_amount = principal * ((1 + rate_decimal) ** years)

        interest_earned = final_amount - principal

        print("\n--- Lump-Sum Investment Results ---")
        print(f"Initial Principal: ${principal:,.2f}")
        print(f"Annual Interest Rate: {rate:.2f}%")
        print(f"Investment Period: {years} years")
        print("-" * 35)
        print(f"Future Value: ${final_amount:,.2f}")
        print(f"Total Interest Earned: ${interest_earned:,.2f}")
        print("----------------------------------\n")

    except Exception as e:
        print(f"An error occurred during lump-sum calculation: {e}")

def calculate_future_value_with_contributions(principal, contribution, rate, years):
    try:
        n = 12
        r_monthly = (rate / 100.0) / n
        total_periods = n * years

        fv_principal = principal * ((1 + r_monthly) ** total_periods)
        fv_contributions = contribution * (((1 + r_monthly) ** total_periods - 1) / r_monthly)
                                           
        final_amount = fv_principal + fv_contributions
        total_invested = principal + (contribution * 12 * years)
        interest_earned = final_amount - total_invested

        print("\n--- Investment with Monthly Contributions Results ---")
        print(f"Initial Principal: ${principal:,.2f}")
        print(f"Monthly Contribution: ${contribution:,.2f}")
        print(f"Annual Interest Rate: {rate:.2f}%")
        print(f"Investment Period: {years} years")
        print("-" * 50)
        print(f"Total Money Invested (Principal + Contributions): ${total_invested:,.2f}")
        print(f"Future Value (Compounded Monthly): ${final_amount:,.2f}")
        print(f"Total Interest Earned: ${interest_earned:,.2f}")
        print("---------------------------------------------------\n")

    except Exception as e:
        print(f"An error occurred during contributions calculation: {e}")


def get_valid_input(prompt, input_type=float):
    while True:
        try:
            value = input_type(input(prompt))
            if value < 0:
                print("Input cannot be negative. Please try again.")
                continue
            return value
        except ValueError:
            print("Invalid input. Please enter a valid number.")

if __name__ == "__main__":
    print("Welcome to the Python Comprehensive Investment Calculator!")
    print("------------------------------------------------------")

    while True:
        mode = input("Select calculation mode (1: Lump-Sum | 2: Monthly Contributions): ")
        if mode in ['1', '2']:
            break
        print("Invalid choice. Please enter '1' or '2'.")

    P = get_valid_input("Enter the initial principal amount ($): ", float)
    R = get_valid_input("Enter the annual interest rate (%): ", float)
    T = get_valid_input("Enter the number of years to invest: ", int)

    if mode == '1':
        calculate_future_value(P, R, T)

    elif mode == '2':
        C = get_valid_input("Enter the additional monthly contribution ($): ", float)
    
        calculate_future_value_with_contributions(P, C, R, T)

# Example: calculate_future_value(1000, 5, 10) -> $1,628.89
# Example: calculate_future_value(5000, 8, 20) -> $23,304.79