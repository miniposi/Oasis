import styled from "styled-components";
import useNavigation from "@/hooks/useNavigation";

function CanvasModal({ text, dsc, showModal, setShowModal }: any) {
  const handleNavigation = useNavigation();

  return (
    showModal && (
      <StyledWrapper>
        <p>{text}</p>
        <StyledButtonWrapper>
          <StyledButton onClick={() => handleNavigation(dsc)}>네</StyledButton>
          <StyledButton onClick={() => setShowModal(false)}>
            아니오
          </StyledButton>
        </StyledButtonWrapper>
      </StyledWrapper>
    )
  );
}

export default CanvasModal;

const StyledWrapper = styled.div`
  width: 462px;
  height: 265px;
  border-radius: 30px;
  background: #fff;
  color: #678fae;
  text-align: center;
  font-size: 28px;

  position: absolute;
  top: 38vh;
  left: 37vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 165px;
  height: 75px;
  color: #fff;
  background-color: #678fae;
  border: 0;
  border-radius: 20px;
  font-size: 24px;
`;
