import styled from "styled-components";
import useNavigation from "@/hooks/useNavigation";

function Home() {
  const handleNavigation = useNavigation();

  return (
    <StyledWrapper>
      <StyledImg src="startcat.png" alt="메인 고양이 이미지" />
      <StyledInnerWrapper>
        <StyledBackImg src="cloud.png" alt="메인 구름 이미지" />
        <StyledContent>
          <StyledSubtitle>모든 반려동물 용품 정보를 한번에!</StyledSubtitle>
          <StyledTitle>펫 리뷰 오아시스</StyledTitle>
          <StyledButton type="button" onClick={() => handleNavigation("login")}>
            지금 시작하기
          </StyledButton>
        </StyledContent>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #678fae;
  max-height: 100vh;
`;

const StyledImg = styled.img`
  width: 380px;
  object-fit: contain;
  position: absolute;
  top: 200px;
  left: 360px;
  z-index: 1;
`;

const StyledInnerWrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  z-index: 2;
  position: relative;
`;

const StyledContent = styled.div`
  z-index: 3;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledBackImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

const StyledTitle = styled.p`
  font-size: 48px;
  padding: 10px 0 30px 0;
`;

const StyledSubtitle = styled.p`
  font-size: 32px;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 90px;
  background-color: #f6eac2;
  color: #678fae;
  border-radius: 86px;
  border: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  font-size: 24px;
  line-height: normal;
`;
