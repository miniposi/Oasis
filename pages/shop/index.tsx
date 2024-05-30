import { useState } from "react";
import styles from "./shop.module.css";
import { PetCategoryProps, PetCategoryData } from "@/data/ShopData";
import Header from "@/components/Header/Header";
import useNavigation from "@/hooks/useNavigation";

interface TypeProps {
  animal: "dog" | "cat";
  category: "food" | "snack" | "supplies";
}

function ShopPage() {
  const [type, setType] = useState<TypeProps["animal"]>("dog");
  const [category, setCategory] = useState<TypeProps["category"]>("food");
  const handleNavigation = useNavigation();

  function handleSelect(type: TypeProps["animal"]) {
    setType(type);
  }

  function handleCategory(category: TypeProps["category"]) {
    setCategory(category);
  }

  function getCategoryMap(type: TypeProps["animal"], category: TypeProps["category"]): PetCategoryProps[] {
    return PetCategoryData[type][category];
  }

  return (
    <>
      <Header>오아시스 상점</Header>
      <div className={styles["type-wrapper"]}>
        <button
          className={`${styles["type-select-button"]} ${type === "dog" && styles["type-active-button"]}`}
          onClick={() => handleSelect("dog")}
        >
          강아지
        </button>
        <button
          className={`${styles["type-select-button"]} ${type === "cat" && styles["type-active-button"]}`}
          onClick={() => handleSelect("cat")}
        >
          고양이
        </button>
      </div>
      <div className={styles["filter-wrapper"]}>
        <button
          className={`${styles["ctg-select-button"]} ${category === "food" && styles["ctg-active-button"]}`}
          onClick={() => handleCategory("food")}
        >
          사료
        </button>
        <button
          className={`${styles["ctg-select-button"]} ${category === "snack" && styles["ctg-active-button"]}`}
          onClick={() => handleCategory("snack")}
        >
          간식
        </button>
        <button
          className={`${styles["ctg-select-button"]} ${category === "supplies" && styles["ctg-active-button"]}`}
          onClick={() => handleCategory("supplies")}
        >
          용품
        </button>
      </div>
      <div className={styles["content-wrapper"]}>
        {getCategoryMap(type, category).map((item: any) => (
          <div
            className={styles["content"]}
            key={item.name}
            onClick={() => handleNavigation(`shop/detail?pcg=${type}&scg=${category}&dcg=${item.info}&ko=${item.name}`)}
          >
            <img
              className={styles["icon-img"]}
              src={item.imageUrl}
              alt={item.name}
            />
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopPage;
