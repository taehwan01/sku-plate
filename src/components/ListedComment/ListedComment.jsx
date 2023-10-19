import styles from "./ListedComment.module.css";

function ListedComment({ comment }) {
  const { name, ratings, text, date } = comment;
  const profileImage = require(`../../assets/images/categories/${comment.profileImage}.png`);
  const photo = require(`../../assets/images/${comment.photo}.png`);

  const utcDate = new Date(date);
  const koreaTimeOptions = {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const koreaTime = new Intl.DateTimeFormat("ko-KR", koreaTimeOptions).format(
    utcDate
  );

  const maxRating = 5;
  const filledStars = Math.floor(ratings);
  const partialStar = ratings - filledStars;
  const emptyStars = maxRating - filledStars - (partialStar > 0.2 ? 1 : 0);

  const stars = (
    <div className={styles.rating}>
      {[...Array(filledStars)].map((_, i) => (
        <span
          className={`material-icons ${styles.ratingsIcon}`}
          style={{ color: "#f9ef14" }}
          key={i}
        >
          star_rate
        </span>
      ))}
      {partialStar > 0.2 && (
        <span
          className={`material-icons ${styles.ratingsIcon}`}
          style={{ color: "#f9ef14" }}
          key="partial"
        >
          star_rate
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span
          className={`material-icons ${styles.ratingsIcon}`}
          style={{ color: "#D9D9D9" }}
          key={i + filledStars}
        >
          star_rate
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img
            className={styles.profileImage}
            src={profileImage}
            alt="user profileImage"
          />
          <div className={styles.commentItem}>
            <span style={{ fontSize: "10px", marginLeft: "8px" }}>{name}</span>
            <div>{stars}</div>
          </div>
        </div>
        <span style={{ margin: "10px", fontSize: "8px" }}>{text}</span>
      </div>

      <span className={styles.date}>{koreaTime}</span>
      <img className={styles.photo} src={photo} alt="" />
    </div>
  );
}

export default ListedComment;
