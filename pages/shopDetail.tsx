import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import useNavigation from "@/hooks/useNavigation";

export default function ShopDetailPage() {
  const params = useSearchParams();
  const handleNavigation = useNavigation();

  return (
    <>
      <Header>{params.get("category")}</Header>
      <StyledWrapper>
        {/* @TODO 데이터로 mapping */}
        <StyledContent onClick={() => handleNavigation("product")}>
          <StyledImg
            src="https://images.pet-friends.co.kr/storage/pet_friends/product/id/e/a/3/9/5/2/e/ea3952e5e18790919174bd0d8bbc02c4/10001/82d024f9f7167cb34efd0c4c9df2067d.jpeg"
            alt="이미지 디테일"
          />
          <StyledInnerWrapper>
            <p>버박 C.E.T 이중효소 닭고기맛 70g</p>
            <p>15000원</p>
            <StyledRatingWrapper>
              <StarRating rating={1.8} />
              <p>(12300)</p>
            </StyledRatingWrapper>
          </StyledInnerWrapper>
        </StyledContent>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 1450px;
  margin: auto;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 30px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledInnerWrapper = styled.div`
  width: 230px;
  height: 114px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledImg = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 30px;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #c0c0c0;
`;
