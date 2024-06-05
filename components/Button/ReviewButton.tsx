import useNavigation from "@/hooks/useNavigation";
import styles from "./review.module.css";

interface Props {
  id: string;
  content: string;
}

export default function ReviewButton({ id, content }: Props) {
  const handleNavigation = useNavigation();

  function handleSubmit() {
    const url = content === "후기 작성하기" ? `review/creation?id=${id}` : `review?id=${id}`;
    handleNavigation(url);
  }

  return (
    <button
      className={styles["wrapper"]}
      onClick={() => handleSubmit()}
    >
      {content}
    </button>
  );
}
