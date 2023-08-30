"use client";
import { createContext, useState } from "react";

export const CategoryContext = createContext<{
  selectedCategory: string;
  handleSelectCategory: (categoryName: string) => void;
}>({
  selectedCategory: "",
  handleSelectCategory: () => {},
});

type CategoryProps = {
  children: React.ReactNode;
};

export const CategoryProvider = ({ children }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, handleSelectCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
