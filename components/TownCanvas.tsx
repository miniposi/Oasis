import { useEffect, useRef, useState } from "react";
import CanvasModal from "./CanvasModal";
import getUser from "@/pages/api/getUser";

interface CanvasProps {
  width: number;
  height: number;
}

const TownCanvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [character, setCharacter] = useState({ x: 920, y: 200 });
  const [shopShowModal, setShopShowModal] = useState(false);
  const [homeShowModal, setHomeShowModal] = useState(false);
  const [comShowModal, setComShowModal] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const fetch = async () => {
    const result: any = await getUser();
    setProfilePic(`http://14.39.203.129:13000/${result.data.user.profilePic}`);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleHome = () => {
    setHomeShowModal(true);
  };

  const handleShop = () => {
    setShopShowModal(true);
  };

  const handleCom = () => {
    setComShowModal(true);
  };

  useEffect(() => {
    const canvasCur = canvasRef.current;
    if (!canvasCur) return;

    const context = canvasCur.getContext("2d");

    const drawBackground = () => {
      const bgImage = new Image();
      bgImage.src = "town.png";
      bgImage.onload = () => {
        bgImage.width = width;
        bgImage.height = height;
        context?.drawImage(bgImage, 0, 0, width, height);
      };
    };

    const drawCharacter = () => {
      const characterImage = new Image();
      characterImage.src = profilePic;
      characterImage.onload = () => {
        if (character.x <= 1680 && character.x >= 1620 && character.y === 80) {
          handleHome();
        }

        if (character.x <= 1040 && character.x >= 960 && character.y === 80) {
          handleShop();
        }

        if (character.x <= 580 && character.x >= 440 && character.y === 500) {
          handleCom();
        }

        context?.drawImage(characterImage, character.x, character.y, 100, 100);
      };
    };

    drawBackground();
    drawCharacter();
  }, [character, width, height]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    let newCharacter = { ...character };
    if (e.key === "ArrowUp") {
      newCharacter.y -= 20;
    } else if (e.key === "ArrowDown") {
      newCharacter.y += 20;
    } else if (e.key === "ArrowLeft") {
      newCharacter.x -= 20;
    } else if (e.key === "ArrowRight") {
      newCharacter.x += 20;
    }

    newCharacter.x = Math.max(0, Math.min(newCharacter.x, 1780));
    newCharacter.y = Math.max(80, Math.min(newCharacter.y, height - 100));

    setCharacter(newCharacter);
  };

  return (
    <>
      <CanvasModal
        text="상점으로 이동하시겠습니까?"
        dsc="shop"
        showModal={shopShowModal}
        setShowModal={setShopShowModal}
      />
      <CanvasModal
        text="집으로 이동하시겠습니까?"
        dsc="home"
        showModal={homeShowModal}
        setShowModal={setHomeShowModal}
      />
      <CanvasModal
        text="커뮤니티로 이동하시겠습니까?"
        dsc="community"
        showModal={comShowModal}
        setShowModal={setComShowModal}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />
    </>
  );
};

export default TownCanvas;
