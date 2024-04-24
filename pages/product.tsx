import styled from "styled-components";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import HorizontalLine from "@/components/HorizontalLine";
import useNavigation from "@/hooks/useNavigation";
import Modal from "@/components/Modal";
import { useState } from "react";

interface ButtonProps {
  $design: "fill" | "unfill";
}

function ProductPage() {
  const handleNavigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleScrap = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <Header>오아시스 상점</Header>
      <StyledWrapper>
        <StyledImg
          src="https://images.pet-friends.co.kr/storage/pet_friends/product/id/e/a/3/9/5/2/e/ea3952e5e18790919174bd0d8bbc02c4/10001/82d024f9f7167cb34efd0c4c9df2067d.jpeg"
          alt="제품 이미지"
        />
        <StyledInnerWrapper>
          <StyledSource>
            오아시스 상점 {">"} 고양이 {">"} 용품 {">"} 치약*칫솔
          </StyledSource>
          <StyledName>버박 C.E.T 이중효소 닭고기맛 70g</StyledName>
          <StyledPrice>15000원</StyledPrice>
          <StyledRatingWrapper>
            5.0
            <StarRating rating={5.0} />
          </StyledRatingWrapper>
          <HorizontalLine />
          <StyledButtonWrapper>
            <StyledButton
              type="button"
              $design="unfill"
              onClick={() => handleNavigation("productDetail")}
            >
              상세보기
            </StyledButton>
            <StyledButton
              type="button"
              $design="unfill"
              onClick={() => handleNavigation("productReview")}
            >
              후기보기
            </StyledButton>
            <StyledButton type="button" $design="fill" onClick={handleScrap}>
              찜하기
            </StyledButton>
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </StyledButtonWrapper>
        </StyledInnerWrapper>
      </StyledWrapper>
    </>
  );
}

export default ProductPage;

const StyledWrapper = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 30px;
  gap: 60px;
`;

const StyledImg = styled.img`
  width: 700px;
  height: 700px;
  border-radius: 30px;
`;

const StyledInnerWrapper = styled.div`
  width: 754px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSource = styled.p`
  color: #b4c9d9;
  font-size: 28px;
`;

const StyledName = styled.p`
  font-size: 40px;
`;

const StyledPrice = styled.p`
  font-size: 32px;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  padding-left: 10px;
  padding-bottom: 40px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-top: 45px;
`;

const StyledButton = styled.button<ButtonProps>`
  width: 200px;
  height: 120px;
  text-align: center;
  color: ${({ $design }) => ($design === "fill" ? "#678FAE" : "#FFF")};
  background: ${({ $design }) => ($design === "fill" ? "#C6E6FF" : "#678FAE")};
  border: ${({ $design }) => ($design === "fill" ? "0" : "5px solid #C6E6FF")};
  border-radius: 30px;
  font-size: 28px;
`;
