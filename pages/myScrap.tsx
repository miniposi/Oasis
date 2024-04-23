import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import styled from "styled-components";

export default function MyScrapPage() {
  return (
    <>
      <Header>포시의 서랍</Header>
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledImg src="custom/cat1.png" alt="프로필 사진" />
          포시
          <StyledType>먼치킨</StyledType>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledContent>
            <StyledContentImg src="shop/adultdog.png" alt="상품 이미지" />
            <StyledInfo>
              <StyledName>
                고양이섬 리필 50종 고양이섬 리필 50종 고양이섬 리필 50종
                고양이섬 리필 50종
              </StyledName>
              <StyledPrice>1200원</StyledPrice>
              <StarRating rating={3.0} />
            </StyledInfo>
          </StyledContent>
        </StyledRightWrapper>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  width: 1500px;
  height: 863px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const StyledLeftWrapper = styled.div`
  width: 334px;
  height: 407px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
`;

const StyledRightWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  overflow-y: scroll;
`;

const StyledImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #fff;
`;

const StyledType = styled.p`
  color: #375974;
  font-size: 32px;
`;

const StyledContent = styled.div`
  width: 260px;
  height: 400px;
`;

const StyledContentImg = styled.img`
  width: 260px;
  height: 260px;
  border: 3px solid #fff;
  border-radius: 30px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  font-size: 22px;
  gap: 5px;
`;

const StyledName = styled.div`
  width: 240px;
  height: 32px;
  overflow: auto;
`;

const StyledPrice = styled.p`
  font-size: 16px;
`;
