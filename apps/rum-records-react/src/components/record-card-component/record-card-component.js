import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faFileAudio, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

import './record-card-component.css';

export function RecordCardComponent(props) {

  const formatIconMap = {
    'LP': faRecordVinyl,
    'CD': faCompactDisc,
    'DD': faFileAudio
  };

  return (
    <div className="record-card" data-testid='record-card'>
      <img src={props.record.imagePath} alt='Record'/>
    <div className="record-details">
      <h2>{props.record.title}</h2>
      <h3>{props.record.artist}</h3>
      <div className="available-formats">
        <label className="available-formats-label">Available formats</label>
        <div data-testid='format-icon-collection' className="format-icons">
        { props.record.formats.length > 0 ?
        props.record.formats.map((format, index) => 
        (<FontAwesomeIcon key={index} icon={formatIconMap[format]}/>)
        ) : 
        <label className="no-formats-available-label">N/A</label>}
        </div>
      </div>
    </div>
  </div>
  );
}
export default RecordCardComponent;
