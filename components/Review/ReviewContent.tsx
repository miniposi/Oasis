import config from "@/config";
import styles from "./content.module.css";
import ReviewerHeader from "../Header/ReviewerHeader";

export default function ReviewContent({ item }: any) {
  return (
    <div className={styles["wrapper"]}>
      <ReviewerHeader item={item} />
      <div className={styles["img-wrapper"]}>
        {item.ReviewPhotoOrders.map((img: any) => (
          <img
            className={styles["review-img"]}
            key={img.sequence}
            src={`${config.baseURL}/${img.ReviewPhoto.path}`}
            alt="리뷰 이미지"
          />
        ))}
      </div>
      <p className={styles["review-text"]}>{item.content}</p>
    </div>
  );
}
