import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface InvestmentFormProps {
  initialInvestment: number;
  monthlyContribution: number;
  years: number;
  returnRate: number;
  onInitialInvestmentChange: (value: number) => void;
  onMonthlyContributionChange: (value: number) => void;
  onYearsChange: (value: number) => void;
  onReturnRateChange: (value: number) => void;
}

export const InvestmentForm = ({
  initialInvestment,
  monthlyContribution,
  years,
  returnRate,
  onInitialInvestmentChange,
  onMonthlyContributionChange,
  onYearsChange,
  onReturnRateChange,
}: InvestmentFormProps) => {
  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-2xl font-semibold mb-6 text-foreground">Investment Parameters</h2>
      
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="initial" className="text-sm font-medium text-foreground">
            Initial Investment
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="initial"
              type="number"
              value={initialInvestment}
              onChange={(e) => onInitialInvestmentChange(Number(e.target.value))}
              className="pl-7 bg-background border-input text-foreground"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly" className="text-sm font-medium text-foreground">
            Monthly Contribution
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="monthly"
              type="number"
              value={monthlyContribution}
              onChange={(e) => onMonthlyContributionChange(Number(e.target.value))}
              className="pl-7 bg-background border-input text-foreground"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="years" className="text-sm font-medium text-foreground">
            Time Period (Years)
          </Label>
          <Input
            id="years"
            type="number"
            value={years}
            onChange={(e) => onYearsChange(Number(e.target.value))}
            className="bg-background border-input text-foreground"
            min="1"
            max="50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="return" className="text-sm font-medium text-foreground">
            Expected Annual Return (%)
          </Label>
          <Input
            id="return"
            type="number"
            value={returnRate}
            onChange={(e) => onReturnRateChange(Number(e.target.value))}
            className="bg-background border-input text-foreground"
            min="0"
            max="100"
            step="0.1"
          />
        </div>
      </div>
    </Card>
  );
};
