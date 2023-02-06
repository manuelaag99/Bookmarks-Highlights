import React from "react";

const ImageSlider = props => {

    return (
        <div className="photos h-16 w-5/6 m-auto mb-6 flex flex-row items-center justify-between">
            {props.photolist.map((photo, index) => {
                return <img key={index} className="w-16 h-full cursor-pointer hover:opacity-70 duration-300" src={photo.photoUrl} alt=""/>
            })}
        </div>
    )
}

export default ImageSlider;