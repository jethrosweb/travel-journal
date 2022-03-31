import React from "react"

export default function Cards(props) {
    return (
        <div className="cards">
            <img src={props.item.imageUrl} alt="Location photo" className="cards--images" />
            <section>
                <ion-icon name="pin"></ion-icon>
                <p>{props.item.location}</p>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </section>
            <h1>{props.item.title}</h1>
            <p>
                <span>{props.item.startDate}</span>-
                <span>{props.item.endDate}</span>
            </p>
            <p>{props.item.description}</p>
        </div>
    )
}