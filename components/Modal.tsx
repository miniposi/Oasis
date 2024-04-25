import styled from "styled-components";
import useNavigation from "@/hooks/useNavigation";

function Modal({ showModal, setShowModal }: any) {
  const handleNavigation = useNavigation();

  return (
    showModal && (
      <StyledWrapper>
        <p>
          집사님! 상품이 <br></br> 내 서랍으로 들어갔어요
        </p>
        <StyledButton onClick={() => handleNavigation("home")}>
          보러가기
        </StyledButton>
      </StyledWrapper>
    )
  );
}

export default Modal;

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

const StyledButton = styled.button`
  width: 335px;
  height: 75px;
  color: #fff;
  background-color: #678fae;
  border: 0;
  border-radius: 20px;
  font-size: 24px;
`;
