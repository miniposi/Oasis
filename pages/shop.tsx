import { useState } from "react";
import styled from "styled-components";

interface TypeProps {
  animal: "dog" | "cat";
  category: "사료" | "간식" | "용품";
}

interface ButtonProps {
  $isActive: boolean;
}

export default function ShopPage() {
  const [type, setType] = useState<TypeProps["animal"]>("dog");
  const [category, setCategory] = useState<TypeProps["category"]>("사료");

  const handleSelect = (type: TypeProps["animal"]) => {
    setType(type);
  };

  const handleCategory = (category: TypeProps["category"]) => {
    setCategory(category);
  };

  return (
    <StyledWrapper>
      <StyledHeader>오아시스 상점</StyledHeader>
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
          $isActive={category === "사료" ? true : false}
          onClick={() => handleCategory("사료")}
        >
          사료
        </StyledCtgButton>
        <StyledCtgButton
          $isActive={category === "간식" ? true : false}
          onClick={() => handleCategory("간식")}
        >
          간식
        </StyledCtgButton>
        <StyledCtgButton
          $isActive={category === "용품" ? true : false}
          onClick={() => handleCategory("용품")}
        >
          용품
        </StyledCtgButton>
      </StyledFilterWrapper>
      <StyledContentWrapper>
        <StyledContent>
          <StyledImg src="shop/all.png" alt="전체보기" />
          전체보기
        </StyledContent>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 35px;
`;

const StyledUnderWrapper = styled.div`
  display: flex;
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
  width: 1602px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
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
