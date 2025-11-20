export interface InvestmentResult {
  finalValue: number;
  totalContributions: number;
  totalGains: number;
  yearlyData: {
    year: number;
    value: number;
    contributions: number;
  }[];
}

export const calculateInvestment = (
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  annualReturnRate: number
): InvestmentResult => {
  const monthlyRate = annualReturnRate / 100 / 12;
  const months = years * 12;
  
  const yearlyData = [];
  let currentValue = initialInvestment;
  let totalContributions = initialInvestment;
  
  // Add initial year
  yearlyData.push({
    year: 0,
    value: currentValue,
    contributions: totalContributions,
  });
  
  // Calculate for each year
  for (let year = 1; year <= years; year++) {
    // Calculate growth for this year
    for (let month = 1; month <= 12; month++) {
      currentValue = currentValue * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
    }
    
    yearlyData.push({
      year,
      value: Math.round(currentValue),
      contributions: Math.round(totalContributions),
    });
  }
  
  const finalValue = Math.round(currentValue);
  const totalGains = finalValue - totalContributions;
  
  return {
    finalValue,
    totalContributions: Math.round(totalContributions),
    totalGains,
    yearlyData,
  };
};
