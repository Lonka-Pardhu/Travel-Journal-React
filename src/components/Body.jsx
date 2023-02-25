import Marker from '../images/marker.png'

export default function Body(props) {
    return (
        <>
            <div className="body-cards">
                <img className="card-img" src={props.data.imageUrl} alt="image" />

                <div className="card-data">
                    <div className="card-location">
                        <img src={Marker} alt="pin" />
                        <p>{props.data.location.toUpperCase()}</p>
                        <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.data.title}</h1>
                    <h4>{props.data.startDate} - {props.data.endDate}</h4>
                    <p>{props.data.description}</p>
                </div>

            </div>
        </>
    )
}

