import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import HorizontalLine from "@/components/HorizontalLine";
import useNavigation from "@/hooks/useNavigation";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import getProduct from "./api/getProduct";
import postScrap from "./api/postScrap";

interface ButtonProps {
  $design: "fill" | "unfill";
}

function ProductPage() {
  const params = useSearchParams();
  const handleNavigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState<any>({});

  const handleScrap = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
    post();
  };

  const fetch = async () => {
    const response: any = await getProduct(params.get("id"));
    setProductInfo(response.data.product);
  };

  const post = async () => {
    const response: any = await postScrap(params.get("id"));
    console.log(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header>제품 정보</Header>
      <StyledWrapper>
        <StyledImg src={productInfo.thumbnailUrl} alt="제품 이미지" />
        <StyledInnerWrapper>
          <StyledSource>
            오아시스 상점 {">"} {productInfo.pcg} {">"} {productInfo.scg} {">"}{" "}
            {productInfo.dcg}
          </StyledSource>
          <StyledName>{productInfo.name}</StyledName>
          <StyledPrice>{productInfo.price}원</StyledPrice>
          <StyledRatingWrapper>
            {productInfo.avgScore}
            <StarRating rating={productInfo.avgScore} />
          </StyledRatingWrapper>
          <HorizontalLine />
          <StyledButtonWrapper>
            <StyledButton
              type="button"
              $design="unfill"
              onClick={() =>
                handleNavigation(`productDetail?id=${params.get("id")}`)
              }
            >
              상세보기
            </StyledButton>
            <StyledButton
              type="button"
              $design="unfill"
              onClick={() =>
                handleNavigation(`productReview?id=${params.get("id")}`)
              }
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
