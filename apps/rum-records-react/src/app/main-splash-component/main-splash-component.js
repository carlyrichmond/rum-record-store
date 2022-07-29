import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './main-splash-component.module.scss';

export function MainSplashComponent(props) {
  return (
    <div className={style['splash']} style={{backgroundImage: `url("../../assets/images/home-splash-image.jpg"`, height: "100vh"}}>
      <div className={style.searchContainer}>
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Browse our record selection today!" 
        aria-label="Search record selection"></input>
      </div>
    </div>
  );
}
export default MainSplashComponent;
