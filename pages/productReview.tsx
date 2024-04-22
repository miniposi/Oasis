import styled from "styled-components";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import useNavigation from "@/hooks/useNavigation";

export default function ProductReviewPage() {
  const handleNavigation = useNavigation();

  return (
    <>
      <Header>후기</Header>
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledImg src="cloud.png" alt="제품 사진" />
          <StyledName>
            제품명제품명제품명제품명제품명제품명제품명제품명
            제품명제품명제품명제품명제품명제품명제품명제품명제품명
          </StyledName>
          <StyledRatingWrapper style={{ gridArea: "rate" }}>
            4.5
            <StarRating rating={4.5} />
          </StyledRatingWrapper>
          <StyledButton
            onClick={() => handleNavigation("review?product=제품명")}
          >
            후기 작성하기
          </StyledButton>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledReviewContent>
            <StyledReviewer>
              <StyledProfile src="cloud.png" alt="프로필 아이콘" />
              <StyledReviewerName>포시</StyledReviewerName>
              <StarRating rating={3.0} />
            </StyledReviewer>
            <StyledReviewImgs>
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
            </StyledReviewImgs>
            <StyledReview>
              후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~
            </StyledReview>
          </StyledReviewContent>
          <StyledReviewContent>
            <StyledReviewer>
              <StyledProfile src="cloud.png" alt="프로필 아이콘" />
              <StyledReviewerName>포시</StyledReviewerName>
              <StarRating rating={3.0} />
            </StyledReviewer>
            <StyledReviewImgs>
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
            </StyledReviewImgs>
            <StyledReview>
              후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~
            </StyledReview>
          </StyledReviewContent>
          <StyledReviewContent>
            <StyledReviewer>
              <StyledProfile src="cloud.png" alt="프로필 아이콘" />
              <StyledReviewerName>포시</StyledReviewerName>
              <StarRating rating={3.0} />
            </StyledReviewer>
            <StyledReviewImgs>
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
              <StyledReviewImg src="cloud.png" alt="리뷰 이미지" />
            </StyledReviewImgs>
            <StyledReview>
              후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~후기~~~~~~~
            </StyledReview>
          </StyledReviewContent>
        </StyledRightWrapper>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1500px;
  height: 900px;
`;

const StyledLeftWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRightWrapper = styled.div`
  width: 950px;
  height: 850px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50px;
  border: 3px solid #fff;
`;

const StyledName = styled.p`
  font-size: 32px;
  text-align: center;
  margin: 15px 0;
  max-height: 130px;
  overflow-y: scroll;
`;

const StyledRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 24px;
`;

const StyledButton = styled.button`
  width: 520px;
  height: 133px;
  color: #678fae;
  background: #abdee6;
  border: 0;
  border-radius: 30px;
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
`;

const StyledReviewContent = styled.div`
  width: 1073px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledReviewer = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "img text"
    "img rate";
  grid-column-gap: 10px;
  color: #375974;
`;

const StyledProfile = styled.img`
  width: 80px;
  height: 80px;
  border: 0;
  border-radius: 50%;
  grid-area: img;
`;

const StyledReviewerName = styled.p`
  font-size: 16px;
  grid-area: text;
  align-self: center;
`;

const StyledReviewImgs = styled.div`
  width: 1030px;
  height: 200px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const StyledReviewImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledReview = styled.p`
  width: 1030px;
  max-height: 200px;
  overflow-y: scroll;
  font-size: 16px;
  margin: 10px;
`;
