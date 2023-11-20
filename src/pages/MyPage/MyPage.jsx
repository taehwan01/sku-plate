import styles from './MyPage.module.css';
import { userData } from '../../data/userData.js';
import { Fragment, useEffect, useState } from 'react';
import UserComments from './UserComments';
import { useNavigate, useParams } from 'react-router-dom';
import Favorites from './Favorites';
import axios from 'axios';

function MyPage() {
  const { myContents } = useParams();
  const navigate = useNavigate();

  const [showComment, setShowComment] = useState(myContents === 'comments');

  const imageFilePath = require(`../../assets/images/${userData.profileImage}.png`);

  const handleLogout = async () => {
    const response = await axios.get('http://localhost:8080/users/kakao/logout', {
      headers: {
        Authorization: localStorage.getItem('token'), // 카카오 로그인 후 받은 액세스 토큰을 사용해야 합니다
      },
    });
    localStorage.removeItem('token');
    console.log(response.data);
    navigate('/');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <div className={styles.myPage}>
      <div className={styles.profileInfo}>
        <img src={imageFilePath} alt='' className={styles.profileImage} />
        <div className={styles.profileTextInfo}>
          <span>{userData.name}</span>
          <span>{userData.email}</span>
        </div>
      </div>
      <div className={styles.myContents}>
        <div className={styles.contentsCategories}>
          <div
            onClick={() => {
              setShowComment(true);
              navigate('/my-page/comments');
            }}
          >
            <div className={styles.categoryTags}>댓글</div>
            <div
              className={styles.selectedCategoryTag}
              style={{ backgroundColor: `${showComment ? '#e05757' : 'transparent'}` }}
            >
              {/* selected category tagline */}
            </div>
          </div>
          <div
            onClick={() => {
              setShowComment(false);
              navigate('/my-page/favorites');
            }}
          >
            <div className={styles.categoryTags}>즐겨찾기</div>
            <div
              className={styles.selectedCategoryTag}
              style={{ backgroundColor: `${!showComment ? '#e05757' : 'transparent'}` }}
            >
              {/* selected category tagline */}
            </div>
          </div>
        </div>
        <hr style={{ width: 'calc(100% - 40px)', height: '1px', margin: '0 auto' }} />
        {showComment ? <UserComments /> : <Favorites />}
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
}

export default MyPage;
