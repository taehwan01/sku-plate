import ListedComment from "../../components/ListedComment/ListedComment"
import { commentData } from "../../data/commentData";

import styles from "./Restaurant.module.css";

function Comment({ restaurantData }) {
  const restaurantId = 101;
  const comment = commentData.find((comment) => comment.id === restaurantId);
  const { comments } = comment;
  
  return (
    <section aria-label="restaurant commnets" className={styles.container}>
      {comments.map((comment) => (
        <ListedComment key={comment.num} comment={comment} />
      ))}
    </section>
  );
}

export default Comment; 