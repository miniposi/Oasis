import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PetCategoryProps, PetCategoryData } from "@/data/ShopData";
import Header from "@/components/Header";

interface TypeProps {
  animal: "dog" | "cat";
  category: "food" | "snack" | "supplies";
}

interface ButtonProps {
  $isActive: boolean;
}

export default function ShopPage() {
  const [type, setType] = useState<TypeProps["animal"]>("dog");
  const [category, setCategory] = useState<TypeProps["category"]>("food");
  const router = useRouter();

  // @TODO 주소 변경
  const handleNavigation = (dst: string) => {
    router.push(`/${dst}`);
  };

  const handleSelect = (type: TypeProps["animal"]) => {
    setType(type);
  };

  const handleCategory = (category: TypeProps["category"]) => {
    setCategory(category);
  };

  const getCategoryMap = (
    type: TypeProps["animal"],
    category: TypeProps["category"]
  ): PetCategoryProps[] => {
    return PetCategoryData[type][category];
  };

  return (
    <>
      <Header>오아시스 상점</Header>
      <StyledUnderWrapper>
        <StyledTypeButton
          $isActive={type === "dog" ? true : false}
          onClick={() => handleSelect("dog")}
        >
          강아지
        </StyledTypeButton>
        <StyledTypeButton
          $isActive={type === "cat" ? true : false}
          onClick={() => handleSelect("cat")}
        >
          고양이
        </StyledTypeButton>
      </StyledUnderWrapper>
      <StyledFilterWrapper>
        <StyledCtgButton
          $isActive={category === "food" ? true : false}
          onClick={() => handleCategory("food")}
        >
          사료
        </StyledCtgButton>
        <StyledCtgButton
          $isActive={category === "snack" ? true : false}
          onClick={() => handleCategory("snack")}
        >
          간식
        </StyledCtgButton>
        <StyledCtgButton
          $isActive={category === "supplies" ? true : false}
          onClick={() => handleCategory("supplies")}
        >
          용품
        </StyledCtgButton>
      </StyledFilterWrapper>
      <StyledContentWrapper>
        {getCategoryMap(type, category).map((item: any) => (
          <StyledContent
            key={item.name}
            onClick={() => handleNavigation(`shopDetail?category=${item.name}`)}
          >
            <StyledImg src={item.imageUrl} alt={item.name} />
            {item.name}
          </StyledContent>
        ))}
      </StyledContentWrapper>
    </>
  );
}

const StyledUnderWrapper = styled.div`
  display: flex;
  width: 78vw;
  margin: auto;
`;

const StyledTypeButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 28px;
  background: #678fae;
  border: 0;
  border-bottom: ${({ $isActive }) => ($isActive ? "5px solid #fff" : "0")};
  color: ${({ $isActive }) => ($isActive ? "#FFF" : "#C1C1C1")};
`;

const StyledFilterWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15vw;
  padding-top: 25px;
`;

const StyledCtgButton = styled.button<ButtonProps>`
  font-size: 28px;
  width: 235px;
  height: 85px;
  border: ${({ $isActive }) => ($isActive ? "0" : "3px solid #FFF")};
  border-radius: 100px;
  background: ${({ $isActive }) => ($isActive ? "#FFF" : "#678FAE")};
  color: ${({ $isActive }) => ($isActive ? "#678FAE" : "#FFF")};
`;

const StyledContentWrapper = styled.div`
  width: 1400px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 30px;
`;

const StyledContent = styled.div`
  width: 141.156px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 22px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 30%;
`;
