import { WebsiteOption } from "../lib/website-options";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface OptionCardProps {
  option: WebsiteOption;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function OptionCard({ option, isSelected, onToggle }: OptionCardProps) {
  return (
    <Card
      className={`mb-4 hover:cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-primary text-primary-foreground shadow-lg ring-2 ring-primary"
          : "bg-card hover:bg-accent hover:text-accent-foreground"
      }`}
      onClick={() => onToggle(option.id)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{option.name}</span>
          <span className="text-xl font-bold">${option.price}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`mb-4 ${
            isSelected ? "text-primary-foreground/90" : "text-muted-foreground"
          }`}
        >
          {option.description}
        </p>
        <div className="flex items-center justify-end space-x-2">
          <span
            className={`text-sm font-medium ${
              isSelected ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {isSelected ? "Selected" : "Click to select"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
