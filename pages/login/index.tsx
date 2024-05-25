import styled from "styled-components";
import config from "@/config";

function LoginPage() {
  const handleLogin = async () => {
    window.location.href =
      `${config.oauthURL}?` +
      `client_id=${config.cliendID}&` +
      `redirect_uri=${config.redirectURL}` +
      'response_type=token&' +
      `scope=${config.oauthScope}`;
  };

  return (
    <StyledWrapper>
      <StyledImg src="logindog.png" alt="구름 탄 강아지 이미지" />
      <StyledContent>
        <StyledPag>
          간편하게 소셜 로그인<br></br>계정을 사용하여 로그인하세요!
        </StyledPag>
        <StyledButton type="button" style={{ backgroundColor: "#FFEB3B" }}>
          <StyledButtonImg src="icon/kakaoicon.png" alt="카카오톡 아이콘" />
          Sign in with Kakao
        </StyledButton>
        <StyledButton
          type="button"
          style={{ backgroundColor: "#FFF" }}
          onClick={() => handleLogin()}
        >
          <StyledButtonImg src="icon/googleicon.png" alt="구글 아이콘" />
          Sign in with Google
        </StyledButton>
      </StyledContent>
    </StyledWrapper>
  );
}

export default LoginPage;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
  max-height: 100vh;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const StyledImg = styled.img`
  width: 424px;
  transform: rotate(-1.661deg);
  margin: 0 100px;
`;

const StyledPag = styled.p`
  text-align: center;
  font-size: 32px;
`;

const StyledButton = styled.button`
  width: 521px;
  height: 83px;
  border: 0;
  border-radius: 80px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: #3e2723;
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledButtonImg = styled.img`
  width: 50px;
  height: 50px;
`;
