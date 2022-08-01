import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faFileAudio, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

import styles from './record-card-component.module.scss';

export function RecordCardComponent(props) {

  const formatIconMap = {
    'Vinyl': faRecordVinyl,
    'CD': faCompactDisc,
    'Digital Download': faFileAudio
  };

  return (
    <div className={styles['record-card']}>
    <img src={props.record.imagePath} alt='Record'/>
    <div className={styles['record-details']}>
      <h2>{props.record.title}</h2>
      <h3>{props.record.artist}</h3>
      <div className={styles['available-formats']}>
        <label className={styles['available-formats-label']}>Available formats</label>
        <div className={styles['format-icons']}>
        { props.record.formats.map((format, index) => 
        (<FontAwesomeIcon key={index} icon={formatIconMap[format]}/>)
        )}
        </div>
      </div>
    </div>
  </div>
  );
}
export default RecordCardComponent;