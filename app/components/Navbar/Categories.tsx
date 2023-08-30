"use client";
import { categories } from "@/_data/category";
import styles from "./categories.module.css";
import { Category } from "@/app/News.types";
import { useContext, useEffect } from "react";
import { CategoryContext } from "@/app/context/CategoryContext";

const Categories = () => {
  const { categories__container } = styles;
  const { selectedCategory, handleSelectCategory } =
    useContext(CategoryContext);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const handleClick = (category: string) => {
    handleSelectCategory(category);
  };

  return (
    <div className={categories__container}>
      {categories.map((category: Category, index: number) => (
        <p key={index} onClick={() => handleClick(category.name)}>
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default Categories;
