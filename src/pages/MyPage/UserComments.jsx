import styles from './MyPage.module.css';
import { userData } from '../../data/userData.js';
import { Fragment, useState } from 'react';

function UserComments() {
  const userComments = userData.comments;
  const userEmptyComments = [];

  return (
    <section
      aria-label='user comments'
      style={{ width: 'calc(100% - 40px)', minHeight: 'calc(49vh - 46px)', padding: '0 20px' }}
    >
      개발 중...
      {/* {userComments.length > 0 ? (
        <>
          <div style={{ padding: '8px 0 18px', fontSize: '10px' }}>{userComments.length}개의 댓글이 있습니다.</div>
          {userComments.map((comment, index) => {
            const utcDate = new Date(comment.date);
            const koreaTimeOptions = {
              timeZone: 'Asia/Seoul',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            };

            const koreaTime = new Intl.DateTimeFormat('ko-KR', koreaTimeOptions).format(utcDate);

            const commentTextWithLineBreaks = comment.text.split('\n').map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line}
                <br />
              </Fragment>
            ));

            return (
              <div key={comment.id} className={styles.comment}>
                <span className={styles.commentText}>{commentTextWithLineBreaks}</span>
                <span className={styles.commentDate}>{koreaTime}</span>
                <span className={styles.commentRestaurant}>{comment.restaurant}</span>
                {index !== userComments.length - 1 && (
                  <hr style={{ width: '100%', height: '1px', margin: '0 auto 18px' }} />
                )}
              </div>
            );
          })}
        </>
      ) : (
        <div>작성 댓글이 없습니다.</div>
      )} */}
    </section>
  );
}

export default UserComments;
