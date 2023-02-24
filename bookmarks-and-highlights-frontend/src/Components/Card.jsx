import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import ImageSlider from "./ImageSlider";

const Card = props => {
    const DUMPPHOTOSLESSTHANFOUR = props.photos.filter((photo, index) => {
        return index < 4
    })

    return (
        <div className="card rounded-tag xl:min-w-9/10 md:w-88 w-full md:h-64 h-72 bg-var-2 pt-2 pb-5 xl:mx-auto sm:mx-[1%] box-border flex flex-col flex-wrap hover:h-72 duration-500 justify-center mb-14">
            <CardTitle titleOfCard={props.title} />
            <CardText textOfCard={props.numberOfPhotos} />
            <ImageSlider photolist={DUMPPHOTOSLESSTHANFOUR} />
            <Link className="w-9/10 mx-auto" to={"/" + props.specificUserId + "/bandhs/labelid/" + props.specificBookId} state={{ userid:props.specificUserId, bookid: props.specificBookId, title: props.title, entries: props.photos}} >
                <Button classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText="Check my B&Hs" isDefaultButton={true} />
            </Link>
        </div>
    )
}

export default Card;