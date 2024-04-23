import { useEffect, useRef, useState } from "react";
import CanvasModal from "./CanvasModal";

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
        context?.drawImage(bgImage, 0, 0, width, height);
      };
    };

    const drawCharacter = () => {
      const characterImage = new Image();
      characterImage.src = "shop/adultcat.png";
      characterImage.onload = () => {
        console.log(character.x + " " + character.y);

        if (character.x <= 1580 && character.x >= 1520 && character.y === 120) {
          handleHome();
        }

        if (character.x <= 940 && character.x >= 900 && character.y === 120) {
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
    newCharacter.y = Math.max(120, Math.min(newCharacter.y, height - 100));

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
