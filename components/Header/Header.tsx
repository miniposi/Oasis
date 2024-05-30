import styles from "./header.module.css";
import useNavigation from "@/hooks/useNavigation";

export default function Header({ children }: any) {
  const handleNavigation = useNavigation();

  function handleBack() {
    window.history.back();
  }

  return (
    <div className={styles["wrapper"]}>
      <img
        className={styles["icon-img"]}
        src="/icon/backicon.png"
        alt="돌아가기 아이콘"
        onClick={() => handleBack()}
      />
      {children}
      <img
        className={styles["icon-img"]}
        src="/icon/homeicon.png"
        alt="홈 아이콘"
        onClick={() => handleNavigation("home")}
      />
    </div>
  );
}
