interface StarRatingProps {
  rating: number; // 별점
}

function StarRating({ rating }: StarRatingProps) {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const remainingWidth = (rating - filledStars) * 100;

  const filledColor = "#FFE500";
  const emptyColor = "#C0C0C0";

  return (
    <div style={{ display: "inline-block" }}>
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -3 24 24"
          width="24"
          height="24"
          fill={index < filledStars ? filledColor : emptyColor}
          style={{ overflow: "visible", marginRight: "2px" }}
        >
          <path
            d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
            fill={
              index === filledStars && remainingWidth > 0
                ? filledColor
                : emptyColor
            }
            style={{
              clipPath:
                index === filledStars && remainingWidth > 0
                  ? `inset(0 ${100 - remainingWidth}% 0 0)`
                  : undefined,
            }}
          />
          <path
            d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z"
            fill={
              index >= filledStars && remainingWidth > 0
                ? emptyColor
                : filledColor
            }
            style={{
              clipPath:
                index === filledStars && remainingWidth > 0
                  ? `inset(0 0 0 ${remainingWidth}%)`
                  : undefined,
            }}
          />
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
