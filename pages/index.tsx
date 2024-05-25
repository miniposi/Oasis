import useNavigation from '@/hooks/useNavigation';
import styles from '@/pages/index.module.css';

function StartPage() {
  const handleNavigation = useNavigation();

  return (
    <div className={styles.wrapper}>
      <img className={styles.mainImg} src='startcat.png' alt='메인 고양이 이미지' />
      <section className={styles.innerWrapper}>
        <img className={styles.backImg} src='cloud.png' alt='메인 구름 이미지' />
        <main className={styles.contentWrapper}>
          <p className={styles.subTitle}>모든 반려동물 용품 정보를 한번에!</p>
          <p className={styles.title}>펫 리뷰 오아시스</p>
          <button className={styles.startButton} type='button' onClick={() => handleNavigation('login')}>
            지금 시작하기
          </button>
        </main>
      </section>
    </div>
  );
}

export default StartPage;
