import config from "@/config";
import styles from "./login.module.css";

function LoginPage() {
  const handleLogin = async () => {
    window.location.href =
      `${config.oauthURL}?` +
      `client_id=${config.clientID}&` +
      `redirect_uri=${config.redirectURL}&` +
      `response_type=token&` +
      `scope=${config.oauthScope}`;
  };

  return (
    <div className={styles["wrapper"]}>
      <img
        className={styles["main-img"]}
        src="logindog.png"
        alt="구름 탄 강아지 이미지"
      />
      <div className={styles["content-wrapper"]}>
        <p className={styles.title}>
          간편하게 소셜 로그인<br></br>계정을 사용하여 로그인하세요!
        </p>
        <button
          className={styles["login-button"]}
          type="button"
          style={{ backgroundColor: "#FFEB3B" }}
        >
          <img
            className={styles["button-img"]}
            src="icon/kakaoicon.png"
            alt="카카오톡 아이콘"
          />
          Sign in with Kakao
        </button>
        <button
          className={styles["login-button"]}
          type="button"
          style={{ backgroundColor: "#FFF" }}
          onClick={() => handleLogin()}
        >
          <img
            className={styles["button-img"]}
            src="icon/googleicon.png"
            alt="구글 아이콘"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
