import SearchBarComponent from '../search-bar-component/search-bar-component';

import './main-splash-component.css';

export function MainSplashComponent(props) {
  return (
    <div className="splash" style={{backgroundImage: `url("./home-splash-image.jpg"`, height: "100vh"}}>
      <div className="search-bar-container">
        <SearchBarComponent/>
      </div>
    </div>
  );
}

export default MainSplashComponent;
