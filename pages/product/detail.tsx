import styled from "styled-components";
import Header from "@/components/Header/Header";

function ProductDetailPage() {
  return (
    <StyledWrapper>
      <Header>제품명</Header>
      <StyledImg
        src="cloud.png"
        alt="제품 상세 이미지"
      />
    </StyledWrapper>
  );
}

export default ProductDetailPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 1677px;
`;
