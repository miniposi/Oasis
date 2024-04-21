import styled from "styled-components";
import { useRouter } from "next/router";

export default function Header({ children }: any) {
  const router = useRouter();

  // @TODO 주소 변경
  const handleNavigation = (dst: string) => {
    router.push(`/${dst}`);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <StyledHeader>
      <StyledHeaderImg
        src="icon/backicon.png"
        alt="돌아가기 아이콘"
        onClick={() => handleBack()}
      />
      {children}
      <StyledInnerHeader>
        <StyledHeaderImg
          src="icon/searchicon.png"
          alt="검색 아이콘"
          onClick={() => handleNavigation("")}
        />
        <StyledHeaderImg
          src="icon/homeicon.png"
          alt="홈 아이콘"
          onClick={() => handleNavigation("")}
        />
      </StyledInnerHeader>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30vw;
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 35px;
`;

const StyledInnerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledHeaderImg = styled.img`
  width: 40px;
  height: 40px;
`;
