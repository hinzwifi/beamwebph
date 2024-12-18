"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import websiteOptions from "../data/website-options.json";
import { WebsiteOption } from "../lib/website-options";
import { OptionCard } from "./OptionCard";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
    let total = 0;
    let customCount = 0;

    websiteOptions.features
      .concat(websiteOptions.services)
      .forEach((option) => {
        if (selectedOptions.has(option.id)) {
          if (option.price === "TBD") {
            customCount++;
          } else if (typeof option.price === "number") {
            total += option.price;
          }
        }
      });

    let displayTotal = `${total}`;
    if (customCount > 0) {
      displayTotal += ` plus Custom Feature`;
    }

    return displayTotal;
  };
  const addPlus = (price: any) => {
    console.log(price);
    if (price === "TBD") {
      return " + Custom Feature";
    } else {
      return price;
    }
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
      <h1 className="md:text-6xl text-2xl font-bold mb-8 text-center mt-10 ">
        Web Development Quote
      </h1>
      {renderOptions(websiteOptions.features as WebsiteOption[], "Features")}
      {renderOptions(websiteOptions.services as WebsiteOption[], "Services")}
      <Card className="sticky bottom-2 bg-yellow-300  dark:bg-yellow-400   shadow-lg z-10">
        <CardHeader className="py-3">
          <CardTitle className="text-lg font-semibold text-primary dark:text-[#151515]">
            Total Cost
          </CardTitle>
        </CardHeader>
        <CardContent className="py-3 flex flex-row justify-between ">
          <p className="text-3xl font-bold text-primary dark:text-[#151515]">
            ${calculateTotal()}
          </p>
          <Button
            className="dark:bg-[#151515] dark:text-white"
            onClick={() => setSelectedOptions(new Set())}
          >
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
