import { useState, useEffect } from "react";
import { InvestmentForm } from "@/components/InvestmentForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { InvestmentChart } from "@/components/InvestmentChart";
import { calculateInvestment } from "@/utils/investmentCalculations";
import { Calculator } from "lucide-react";

const Index = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(7);

  const results = calculateInvestment(
    initialInvestment,
    monthlyContribution,
    years,
    returnRate
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-xl">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Investment Calculator
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your financial future with compound interest calculations
          </p>
        </header>

        {/* Results Summary */}
        <div className="mb-8">
          <ResultsDisplay
            finalValue={results.finalValue}
            totalContributions={results.totalContributions}
            totalGains={results.totalGains}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form - Takes 1 column */}
          <div className="lg:col-span-1">
            <InvestmentForm
              initialInvestment={initialInvestment}
              monthlyContribution={monthlyContribution}
              years={years}
              returnRate={returnRate}
              onInitialInvestmentChange={setInitialInvestment}
              onMonthlyContributionChange={setMonthlyContribution}
              onYearsChange={setYears}
              onReturnRateChange={setReturnRate}
            />
          </div>

          {/* Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <InvestmentChart data={results.yearlyData} />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * This calculator uses compound interest with monthly contributions. Results are estimates and not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
