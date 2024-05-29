import styled from "styled-components";
import { CustomCatData, CustomDogData } from "@/data/CustomData";
import { useEffect, useState } from "react";
import postLogin from "@/api/postLogin";
import useNavigation from "@/hooks/useNavigation";
import putUser from "@/api/putUser";
import getUser from "@/api/getUser";

interface ButtonProps {
  $isActive: boolean;
}

interface AnimalTypeProps {
  type: "cat" | "dog";
}

function CustomPage() {
  const [type, setType] = useState<AnimalTypeProps["type"]>("dog");
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("말티즈");
  const [selectedID, setSelectedID] = useState(1);
  const handleNavigation = useNavigation();

  const handleAnimalType = (type: "cat" | "dog") => {
    setType(type);
    if (type === "cat") {
      setSpecies("코리안 숏헤어");
      setSelectedID(1);
    } else {
      setSpecies("말티즈");
      setSelectedID(1);
    }
  };

  const handleSelect = (item: any) => {
    setSpecies(item.name);
    setSelectedID(item.id);
  };

  const getCustomMap = (type: "cat" | "dog") => {
    return type === "cat" ? CustomCatData : CustomDogData;
  };

  // 로그인 시에 토큰을 쿠키에 저장하는 함수
  function setCookie(name: string, value: string, days: number) {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // 폼 제출 막기
    event.preventDefault();

    // 백엔드로 캐릭터 데이터 넘기기
    const userData = {
      name: name,
      breed: species,
    };
    const response: any = await putUser(userData);
    if (response.status === 200) {
      handleNavigation("/shop");
    } else {
      alert("로그인부터 다시 진행해주세요");
    }
  };

  const fetch = async () => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    const response: any = await postLogin(accessToken);
    if (response.status === 200) {
      setCookie("accessToken", response.data.accessToken, 7);

      const result: any = await getUser();
      if (result.data.user.name !== null) {
        handleNavigation("/shop");
      }
    } else {
      alert("로그인을 다시 진행해주세요");
      handleNavigation("/login");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <StyledWrapper>
      <StyledHeader>당신의 펫을 등록하세요!</StyledHeader>
      <StyledInnerWrapper>
        <StyledChose>
          <StyledButtonHeader>
            <StyledButton
              type="button"
              $isActive={type === "dog" ? true : false}
              onClick={() => handleAnimalType("dog")}
            >
              강아지
            </StyledButton>
            <StyledButton
              type="button"
              $isActive={type === "cat" ? true : false}
              onClick={() => handleAnimalType("cat")}
            >
              고양이
            </StyledButton>
          </StyledButtonHeader>
          <StyledCustomWrapper>
            {getCustomMap(type).map((item) => (
              <StyledCustom key={item.id} onClick={() => handleSelect(item)}>
                <StyledImg src={item.src} alt={item.name} />
                <StyledNameTag
                  $isActive={selectedID === item.id ? true : false}
                >
                  {item.name}
                </StyledNameTag>
              </StyledCustom>
            ))}
          </StyledCustomWrapper>
        </StyledChose>
        <StyledContent>
          <StyledInput
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledSelectedSpecies>{species}</StyledSelectedSpecies>
          <StyledSubmitButton type="button" onClick={handleSubmit}>
            선택 완료
          </StyledSubmitButton>
        </StyledContent>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}

export default CustomPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1224px;
  height: 144px;
  color: #fff;
  text-align: center;
  font-size: 48px;
  margin: auto;
`;

const StyledInnerWrapper = styled.div`
  width: 1531px;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledChose = styled.div`
  padding: 100px;
`;

const StyledContent = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledButton = styled.button<ButtonProps>`
  width: 243px;
  height: 96px;
  border-radius: 61px;
  border: ${({ $isActive }) => ($isActive ? "0" : "3px solid #FFF")};
  background: ${({ $isActive }) => ($isActive ? "#FFF" : "#678FAE")};
  z-index: ${({ $isActive }) => ($isActive ? 3 : 0)};
  color: ${({ $isActive }) => ($isActive ? "#678FAE" : "#FFF")};
  font-size: 30px;
`;

const StyledButtonHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCustomWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 280px);
  grid-template-rows: repeat(2, 280px);
  justify-content: center;
  align-items: center;
  position: relative;
  top: -40px;

  width: 653px;
  padding: 20px 0 35px 0;
  border-radius: 55px;
  border: 0;
  background: #8ea4b9;
`;

const StyledCustom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 280px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 30%;
  position: relative;
  top: 40px;
`;

const StyledNameTag = styled.p<ButtonProps>`
  width: 150px;
  padding: 20px 0;
  background: ${({ $isActive }) => ($isActive ? "#FFF" : "#8ea4b9")};
  color: ${({ $isActive }) => ($isActive ? "#678FAE" : "#FFF")};
  border: ${({ $isActive }) => ($isActive ? "0" : "1px solid #FFF")};
  border-radius: 100px;
  text-align: center;
  z-index: 3;
`;

const StyledInput = styled.input`
  width: 535px;
  height: 102px;
  border: 0;
  border-radius: 27px;
  background: #fff;
  text-align: center;
  font-size: 32px;
  color: #678fae;
  caret-color: #678fae;

  ::placeholder {
    color: #678fae;
    font-size: 32px;
  }

  &:focus {
    outline: none;
  }
`;

const StyledSubmitButton = styled.button`
  width: 535px;
  height: 102px;
  border: 3px solid #fff;
  border-radius: 27px;
  background: #678fae;
  text-align: center;
  font-size: 32px;
  color: #fff;
`;

const StyledSelectedSpecies = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 535px;
  height: 102px;
  border: 0;
  border-radius: 27px;
  background: #fff;
  text-align: center;
  font-size: 32px;
  color: #678fae;
`;
