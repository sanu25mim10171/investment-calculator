import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, PiggyBank } from "lucide-react";

interface ResultsDisplayProps {
  finalValue: number;
  totalContributions: number;
  totalGains: number;
}

export const ResultsDisplay = ({
  finalValue,
  totalContributions,
  totalGains,
}: ResultsDisplayProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const gainPercentage = totalContributions > 0 
    ? ((totalGains / totalContributions) * 100).toFixed(1) 
    : "0.0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-90 mb-1">Final Value</p>
            <p className="text-3xl font-bold">{formatCurrency(finalValue)}</p>
          </div>
          <div className="p-3 bg-primary-foreground/10 rounded-lg">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Contributions</p>
            <p className="text-3xl font-bold text-foreground">{formatCurrency(totalContributions)}</p>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-0 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-90 mb-1">Total Gains</p>
            <p className="text-3xl font-bold">{formatCurrency(totalGains)}</p>
            <p className="text-sm opacity-80 mt-1">+{gainPercentage}%</p>
          </div>
          <div className="p-3 bg-accent-foreground/10 rounded-lg">
            <PiggyBank className="h-6 w-6" />
          </div>
        </div>
      </Card>
    </div>
  );
};
