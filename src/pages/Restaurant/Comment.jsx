import ListedComment from "../../components/ListedComment/ListedComment";
import CommentModal from "../../components/CommentModal/CommentModal";
import { commentData } from "../../data/commentData";

import styles from "./Restaurant.module.css";

function Comment({restaurantData}) {
  console.log(restaurantData)
  const comment = commentData.find((comment) => comment.id === restaurantData);
  const { comments } = comment;

  return (
    <div style={{marginBottom:"97px"}}>
      <section aria-label="restaurant commnets" className={styles.container} style={{ padding:"0"}}>
        {comments.map((comment) => (
          <ListedComment key={comment.num} comment={comment} />
        ))}
      </section>
      <section aria-label="restaurant commnet modal" style={{display:"flex", justifyContent:"center"}}>
        <CommentModal />
      </section>
    </div>
  );
}

export default Comment;
