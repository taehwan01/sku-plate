// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faMap } from '@fortawesome/free-regular-svg-icons';

import styles from './SearchBox.module.css';
import SEARCH_ICON from '../../assets/images/icons/SEARCH_ICON.png';
import MAP_ICON from '../../assets/images/icons/MAP_ICON.png';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  const searchInputFocusedWidth = window.innerWidth - 30 - 23 - 30 - 5;

  const handleSearchKeyword = async () => {
    const searchKeyword = searchInputRef.current.value;
    navigate(`/restaurants/search/${searchKeyword}`);
    // const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/search/${searchKeyword}`, {
    //   withCredentials: true,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // console.log(result.data);
  };

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchButton} style={{ left: isFocused ? `${searchInputFocusedWidth}px` : '27px' }}>
        <span onClick={handleSearchKeyword} className={`material-symbols-outlined ${styles.searchIcon}`}>
          search
        </span>
      </div>
      <input
        type='text'
        className={styles.searchInput}
        ref={searchInputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {/* <div className={styles.mapButton}>
        <span className={`material-symbols-outlined ${styles.mapIcon}`}>map</span>
        <span className={styles.mapLabel}>지도</span>
      </div> */}
    </div>
  );
}

export default SearchBox;
