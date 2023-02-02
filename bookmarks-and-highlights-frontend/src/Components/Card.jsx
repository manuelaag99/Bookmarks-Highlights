import React from "react";

import Button from "./Button";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import ImageSlider from "./ImageSlider";

const Card = props => {
    
    const DUMPPHOTOSLESSTHANFOUR = props.photos.filter((photo, index) => {
        return index < 4
    })

    return (
        <div className="card w-88 h-64 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-72 duration-500 justify-center mb-14">
            <CardTitle titleOfCard={props.title} />
            <CardText textOfCard={props.numberOfPhotos} />
            <ImageSlider photolist={DUMPPHOTOSLESSTHANFOUR} />
            <Button buttonText="Check my B&Hs" />
        </div>
    )
}

export default Card;