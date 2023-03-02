import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import ImageSlider from "./ImageSlider";

export default function Card ({ numberOfPhotos, photos, specificBookId, specificUserId, title }) {
    const DUMPPHOTOSLESSTHANFOUR = photos.filter((photo, index) => index < 4)

    return (
        <div className="card rounded-tag xl:min-w-9/10 md:w-88 w-full md:h-64 h-72 bg-var-2 pt-2 pb-5 xl:mx-auto sm:mx-[1%] box-border flex flex-col flex-wrap hover:h-72 duration-500 justify-center mb-14">
            <CardTitle titleOfCard={title} />
            <CardText textOfCard={numberOfPhotos} />
            <ImageSlider photolist={DUMPPHOTOSLESSTHANFOUR} />
            <Link className="w-9/10 mx-auto" to={"/" + specificUserId + "/bandhs/labelid/" + specificBookId} state={{ userid: specificUserId, bookid: specificBookId, title: title, entries: photos}} >
                <Button isAbled={true} classnames=" text-var-1 bg-var-4 hover:bg-var-4-hovered mt-0 " buttonText="Check my B&Hs" />
            </Link>
        </div>
    )
}