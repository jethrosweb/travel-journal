import React from "react"

export default function Cards(props) {
    return (
        <div className="cards">
            <img src={props.item.imageUrl} alt="Location photo" className="cards--images" />
            <div>
                <section className="cards--location">
                    <ion-icon name="pin"></ion-icon>
                    <p>{props.item.location.toUpperCase()}</p>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </section>
                <h1 className="cards--title">{props.item.title}</h1>
                <p className="cards--dates">
                    <span>{props.item.startDate} </span>-
                    <span> {props.item.endDate}</span>
                </p>
                <p className="cards--description">{props.item.description}</p>
            </div>
        </div>
    )
}