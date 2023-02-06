import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import ImageSlider from "./ImageSlider";

const Card = props => {
    const [selectedBookId, setSelectedBookId] = React.useState("");

    const DUMPPHOTOSLESSTHANFOUR = props.photos.filter((photo, index) => {
        return index < 4
    })

    const callBookId = () => {
        setSelectedBookId((props) => {
            return setSelectedBookId(props.id)
        })
        console.log(selectedBookId)
    }

    return (
        <div className="card rounded-tag xl:w-3/10 md:w-88 w-full md:h-64 h-72 bg-var-2 pt-2 pb-5 xl:mx-0 xl:mr-[5%] sm:mx-[1%] box-border flex flex-col flex-wrap hover:h-72 duration-500 justify-center mb-14">
            <CardTitle titleOfCard={props.title} />
            <CardText textOfCard={props.numberOfPhotos} />
            <ImageSlider photolist={DUMPPHOTOSLESSTHANFOUR} />
            <Link onClick={callBookId} className="w-9/10 mx-auto" to={"/:userid/bandhs/" + {selectedBookId}}>
                <Button buttonText="Check my B&Hs" isDefaultButton={true} />
            </Link>
        </div>
    )
}

export default Card;