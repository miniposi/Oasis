// Canvas.tsx
import { useEffect, useRef, useState } from "react";
import CanvasModal from "./CanvasModal";

interface CanvasProps {
  width: number;
  height: number;
}

const HomeCanvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [character, setCharacter] = useState({ x: 400, y: 560 });
  const [scrapShowModal, setScrapShowModal] = useState(false);
  const [outShowModal, setOutShowModal] = useState(false);

  const handleOut = () => {
    setOutShowModal(true);
    setTimeout(() => {
      setOutShowModal(false);
    }, 3000);
  };

  const handleScrap = () => {
    setScrapShowModal(true);
    setTimeout(() => {
      setScrapShowModal(false);
    }, 3000);
  };
  useEffect(() => {
    const canvasCur = canvasRef.current;
    if (!canvasCur) return;

    const context = canvasCur.getContext("2d");

    const drawBackground = () => {
      const bgImage = new Image();
      bgImage.src = "home.png";
      bgImage.onload = () => {
        context?.drawImage(bgImage, 0, 0, width, height);
      };
    };

    const drawCharacter = () => {
      const characterImage = new Image();
      characterImage.src = "shop/adultcat.png";
      characterImage.onload = () => {
        console.log(character.x + " " + character.y);

        if (character.x <= 1000 && character.x >= 920 && character.y === 200) {
          handleOut();
        }

        if (character.x <= 440 && character.x >= 320 && character.y === 200) {
          handleScrap();
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

    newCharacter.x = Math.max(40, Math.min(newCharacter.x, 1080));
    newCharacter.y = Math.max(200, Math.min(newCharacter.y, height - 100));

    setCharacter(newCharacter);
  };

  return (
    <>
      <CanvasModal
        text="서랍을 여시겠습니까?"
        dsc="myScrap"
        showModal={scrapShowModal}
        setShowModal={setScrapShowModal}
      />
      <CanvasModal
        text="나가시겠습니까?"
        dsc="town"
        showModal={outShowModal}
        setShowModal={setOutShowModal}
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

export default HomeCanvas;
