import styles from "./custom.module.css";
import { CustomCatData, CustomDogData } from "@/data/CustomData";
import { useEffect, useState } from "react";
import postLogin from "@/api/postLogin";
import useNavigation from "@/hooks/useNavigation";
import putUser from "@/api/putUser";
import getUser from "@/api/getUser";
import setCookie from "@/hooks/setCookie";

interface AnimalTypeProps {
  type: "cat" | "dog";
}

function CustomPage() {
  const [type, setType] = useState<AnimalTypeProps["type"]>("dog");
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("말티즈");
  const [selectedID, setSelectedID] = useState(1);
  const handleNavigation = useNavigation();
  const typeDefaultMap = {
    cat: "코리안 숏헤어",
    dog: "말티즈",
  };

  function getCustomMap(type: "cat" | "dog") {
    return type === "cat" ? CustomCatData : CustomDogData;
  }

  function handleAnimalType(type: "cat" | "dog") {
    setType(type);
    setSpecies(typeDefaultMap[type]);
    setSelectedID(1);
  }

  function handleSelect(item: any) {
    setSpecies(item.name);
    setSelectedID(item.id);
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    const userData = {
      name: name,
      breed: species,
    };

    // 폼 제출 막기
    event.preventDefault();

    // 백엔드로 캐릭터 데이터 넘기기
    try {
      const response: any = await putUser(userData);
      if (response.data.user.name !== null) handleNavigation("/shop");
    } catch (error) {
      alert("로그인부터 다시 진행해주세요");
      handleNavigation("/login");
    }
  }

  async function getAccessToken() {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    try {
      const response: any = await postLogin(accessToken);
      setCookie("accessToken", response.data.accessToken, 7);
    } catch (error) {
      alert("로그인을 다시 진행해주세요");
      handleNavigation("/login");
    }
  }

  async function getUserInfo() {
    try {
      const result: any = await getUser();
      if (result.data.user.name !== null) {
        handleNavigation("/shop");
      }
    } catch (error) {
      alert("사용자 정보 조회 과정에서 문제가 발생했습니다.");
    }
  }

  useEffect(() => {
    getAccessToken();
    getUserInfo();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>당신의 펫을 등록하세요!</div>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["select-wrapper"]}>
          <div className={styles["button-header"]}>
            <button
              className={`${styles["select-button"]} ${
                type === "dog" && styles["active-select-button"]
              }`}
              type="button"
              onClick={() => handleAnimalType("dog")}
            >
              강아지
            </button>
            <button
              className={`${styles["select-button"]} ${
                type === "cat" && styles["active-select-button"]
              }`}
              type="button"
              onClick={() => handleAnimalType("cat")}
            >
              고양이
            </button>
          </div>
          <div className={styles["custom-wrapper"]}>
            {getCustomMap(type).map((item) => (
              <div
                className={styles["custom"]}
                key={item.id}
                onClick={() => handleSelect(item)}
              >
                <img
                  className={styles["profile-img"]}
                  src={item.src}
                  alt={item.name}
                />
                <p
                  className={
                    selectedID === item.id
                      ? styles["active-name-tag"]
                      : styles["name-tag"]
                  }
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["content-wrapper"]}>
          <input
            className={styles["name-input"]}
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className={styles["selected"]}>{species}</p>
          <button
            className={styles["submit-button"]}
            type="button"
            onClick={handleSubmit}
          >
            선택 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomPage;
