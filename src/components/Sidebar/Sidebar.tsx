import React from "react";
import { categories } from "@/lib/utils/constants";
import { ICategory } from "@/Types/TypesCategory";
import { cn } from "@/lib/utils/tailwind-utils";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
export const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) => {
  return (
    <div className="flex lg:flex-col gap-3 py-1 px-4 lg:p-4">
      {categories.map((item: ICategory, i) => (
        <button
          onClick={() => setSelectedCategory(item.name)}
          className={cn(
            "flex items-center gap-2 lg:gap-4 rounded-full lg:rounded-xl px-5 py-1 lg:p-3 text-sm lg:text-xl opacity-95",
            selectedCategory === item.name &&
              "bg-card opacity-100 text-destructive"
          )}
        >
          {item.icons}
          <h1 className="text-sm font-normal">{item.name}</h1>
        </button>
      ))}
    </div>
  );
};