import styles from './AdBanner.module.css';
import KakaoAdFit from './KakaoAdFit';

function AdBanner() {
  return (
    <>
      <section className={styles.adBanner}>
        <KakaoAdFit />
      </section>
    </>
  );
}

export default AdBanner;
