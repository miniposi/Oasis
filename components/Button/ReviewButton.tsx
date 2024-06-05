import styles from "./review.module.css";

interface Props {
  content: string;
  onClick: () => void;
}

export default function ReviewButton({ content, onClick }: Props) {
  return (
    <button
      className={styles["wrapper"]}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
