"use client";

import { useState } from "react";
import { WebsiteOptions, WebsiteOption } from "../lib/website-options";
import websiteOptions from "../data/website-options.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptionCard } from "./OptionCard";

export default function WebsiteCostCalculator() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set()
  );

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(optionId)) {
        newSelected.delete(optionId);
      } else {
        newSelected.add(optionId);
      }
      return newSelected;
    });
  };

  const calculateTotal = () => {
    return (websiteOptions.features as WebsiteOption[])
      .concat(websiteOptions.services as WebsiteOption[])
      .filter((option) => selectedOptions.has(option.id))
      .reduce((total, option) => total + option.price, 0);
  };

  const renderOptions = (options: WebsiteOption[], title: string) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={selectedOptions.has(option.id)}
            onToggle={handleOptionToggle}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-8">Website Cost Calculator</h1>
      {renderOptions(websiteOptions.features as WebsiteOption[], "Features")}
      {renderOptions(websiteOptions.services as WebsiteOption[], "Services")}
      <Card className="sticky bottom-2  bg-yellow-300   shadow-lg z-10">
        <CardHeader className="py-3">
          <CardTitle className="text-lg font-semibold text-primary">
            Total Cost
          </CardTitle>
        </CardHeader>
        <CardContent className="py-3">
          <p className="text-3xl font-bold text-primary">${calculateTotal()}</p>
        </CardContent>
      </Card>
    </div>
  );
}
