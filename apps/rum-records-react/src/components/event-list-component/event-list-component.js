import './event-list-component.css';

export function EventListComponent(props) {
  return (
    <div className="events-container" style={{height: "100vh"}}>
      <label data-testid='events-label' className="no-events-label">No events scheduled. Check back soon!</label> 
    </div>
  );
}
export default EventListComponent;
