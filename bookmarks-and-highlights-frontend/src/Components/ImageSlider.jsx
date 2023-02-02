import React from "react";

const ImageSlider = props => {
    return (
        <div className="photos h-16 w-11/12 m-auto mb-4 flex flex-row items-center justify-between">
            {props.photolist.map(photo => {
                return <img className="w-16 h-full cursor-pointer hover:opacity-70 duration-300" src={photo} alt=""/>
            })}
        </div>
    )
}

export default ImageSlider;