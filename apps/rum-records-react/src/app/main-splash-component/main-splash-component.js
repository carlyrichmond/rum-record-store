import SearchBarComponent from '../search-bar-component/search-bar-component';
import styles from './main-splash-component.module.scss';

export function MainSplashComponent(props) {
  return (
    <div className={styles['splash']} style={{backgroundImage: `url("../../assets/images/home-splash-image.jpg"`, height: "100vh"}}>
      <div className={styles['search-bar-container']}>
        <SearchBarComponent/>
      </div>
    </div>
  );
}

export default MainSplashComponent;
