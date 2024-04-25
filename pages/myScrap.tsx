import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import styled from "styled-components";
import getScrapList from "./api/getScrapList";
import deleteScrap from "./api/deleteScrap";
import { useEffect, useState } from "react";
import getUser from "./api/getUser";
import useNavigation from "@/hooks/useNavigation";

function MyScrapPage() {
  const [isUpdate, setIsUpdate] = useState(1);
  const [scrapList, setScrapList] = useState([]);
  const [userInfo, setUserInfo] = useState<any>();
  const handleNavigation = useNavigation();

  const handleDelete = async (id: any) => {
    const response: any = await deleteScrap(id);
    console.log(response);
    setIsUpdate(isUpdate * -1);
  };

  const fetch = async () => {
    const response: any = await getScrapList();
    setScrapList(response.data);
    const result: any = await getUser();
    setUserInfo(result.data.user);
  };

  useEffect(() => {
    fetch();
  }, [isUpdate]);

  return (
    <>
      <Header>{userInfo !== undefined ? userInfo.name : ""}의 서랍</Header>
      <StyledWrapper>
        <StyledLeftWrapper>
          <StyledImg
            src={
              userInfo !== undefined
                ? `http://14.39.203.129:13000/${userInfo.profilePic}`
                : ""
            }
            alt="프로필 사진"
          />
          {userInfo !== undefined ? userInfo.name : ""}
          <StyledType>
            {userInfo !== undefined ? userInfo.breed : ""}
          </StyledType>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          {scrapList.map((item: any) => (
            <StyledContent key={item.id}>
              <StyledDeleteButton onClick={() => handleDelete(item.Product.id)}>
                <img
                  src="icon/deleteicon.png"
                  width={30}
                  height={30}
                  alt="삭제 버튼"
                />
              </StyledDeleteButton>
              <StyledContentImg
                onClick={() =>
                  handleNavigation(`product?id=${item.Product.id}`)
                }
                src={item.Product.thumbnailUrl}
                alt="상품 이미지"
              />
              <StyledInfo>
                <StyledName>{item.Product.name}</StyledName>
                <StyledPrice>{item.Product.price}원</StyledPrice>
                <StarRating rating={item.Product.avgScore} />
              </StyledInfo>
            </StyledContent>
          ))}
        </StyledRightWrapper>
      </StyledWrapper>
    </>
  );
}

export default MyScrapPage;

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
  position: relative;
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
  max-height: 70px;
  overflow: auto;
`;

const StyledPrice = styled.p`
  font-size: 16px;
`;

const StyledDeleteButton = styled.button`
  background: transparent;
  border: 0;
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
`;
