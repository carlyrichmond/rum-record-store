import styles from './news-list-component.module.scss';
export function NewsListComponent(props) {
  return (
    <div className={styles['container']} style={{height: "100vh"}}>
      {
        <label className={styles['no-news-label']}>Unable to obtain news stories.</label> 
      }
    </div>
  );
}
export default NewsListComponent;
