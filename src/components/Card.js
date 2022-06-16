export default function Card(props) {
  return (
    <div className='card'>
      <div className='card--image-container'>
        <img src={props.imageUrl} alt='img' />
      </div>
      <div className='card--content'>
        <div className='card--location'>
          <span className='card--country'>
            <img src='imgs/location.png' alt='location pin' />
            {props.location.toUpperCase()}
          </span>
          <span className='card--link'>
            <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>
              View on Google Maps
            </a>
          </span>
        </div>
        <h1 className='card--header'>{props.title}</h1>
        <span className='card--date'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='card--description'>{props.description}</p>
      </div>
    </div>
  );
}
