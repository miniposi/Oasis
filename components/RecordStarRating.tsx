interface StarRatingProps {
  rating: number; // 별점
}

function RecordStarRating({ starRate, setStarRate }: any) {
  const totalStars = 5;

  const filledColor = "#FFE500";
  const emptyColor = "#C0C0C0";

  const handleStarRate = (index: number) => {
    setStarRate(index + 1);
  };

  return (
    <div style={{ display: "inline-block" }}>
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -3 24 24"
          width="24"
          height="24"
          style={{ overflow: "visible", marginRight: "2px" }}
          onClick={() => handleStarRate(index)}
        >
          <path
            d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
            fill={index >= starRate ? emptyColor : filledColor}
          />
        </svg>
      ))}
    </div>
  );
}

export default RecordStarRating;
