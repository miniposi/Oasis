import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import useNavigation from "@/hooks/useNavigation";
import { useEffect, useState } from "react";
import getProductList from "./api/getProductList";

function ShopDetailPage() {
  const params = useSearchParams();
  const pcg = params.get("pcg");
  const scg = params.get("scg");
  const dcg = params.get("dcg");
  const handleNavigation = useNavigation();
  const [productList, setProductList] = useState([]);

  const fetch = async () => {
    const response: any = await getProductList(pcg, scg, dcg);
    setProductList(response.data.productList);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header>{params.get("ko")}</Header>
      <StyledWrapper>
        {productList.map((item: any) => (
          <StyledContent
            key={item.id}
            onClick={() => handleNavigation(`product?id=${item.id}`)}
          >
            <StyledImg src={item.thumbnailUrl} alt="이미지 디테일" />
            <StyledInnerWrapper>
              <StyledName>{item.name}</StyledName>
              <p>{item.price}원</p>
              <StyledRatingWrapper>
                <StarRating rating={item.avgScore} />
                <p>({item.reviewCount})</p>
              </StyledRatingWrapper>
            </StyledInnerWrapper>
          </StyledContent>
        ))}
      </StyledWrapper>
    </>
  );
}

export default ShopDetailPage;

const StyledWrapper = styled.div`
  width: 1450px;
  margin: auto;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 30px;
  overflow: scroll;
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
  height: 120px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledName = styled.div`
  max-height: 60px;
  overflow-y: scroll;
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
