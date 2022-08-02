import styles from './event-list-component.module.scss';
export function EventListComponent(props) {
  return (
    <div className={styles['container']} style={{height: "100vh"}}>
      <label className={styles['no-events-label']}>No events scheduled. Check back soon!</label> 
    </div>
  );
}
export default EventListComponent;
