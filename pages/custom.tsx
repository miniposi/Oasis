import styled from "styled-components";

interface ButtonProps {
  isActive: true | false;
}

export default function CustomPage() {
  return (
    <StyledWrapper>
      <StyledHeader>당신의 펫을 등록하세요!</StyledHeader>
      <StyledInnerWrapper>
        <StyledChose>
          <StyledButtonHeader>
            <StyledButton type="button" isActive={true}>
              강아지
            </StyledButton>
            <StyledButton type="button" isActive={false}>
              고양이
            </StyledButton>
          </StyledButtonHeader>
        </StyledChose>
        <StyledContent></StyledContent>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

const StyledHeader = styled.div``;

const StyledInnerWrapper = styled.div``;

const StyledChose = styled.div``;

const StyledContent = styled.div``;

const StyledButton = styled.button<ButtonProps>``;

const StyledButtonHeader = styled.div``;
