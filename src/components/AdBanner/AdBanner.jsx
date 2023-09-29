import styles from './AdBanner.module.css';
import KakaoAdFit from './KakaoAdFit';

function AdBanner() {
  return (
    <>
      <div className={styles.adBanner}>
        <KakaoAdFit />
      </div>
    </>
  );
}

export default AdBanner;
