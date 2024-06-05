import config from "@/config";
import styles from "./reviewer.module.css";
import StarRating from "../StarRating";

export default function ReviewerHeader({ item }: any) {
  return (
    <div className={styles["wrapper"]}>
      <img
        className={styles["profile-img"]}
        src={`${config.baseURL}/${item.User.profilePic}`}
        alt="프로필 아이콘"
      />
      <p className={styles["name-text"]}>{item.User.name}</p>
      <StarRating rating={item.score} />
    </div>
  );
}
