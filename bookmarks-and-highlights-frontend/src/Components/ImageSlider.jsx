import React from "react";

const ImageSlider = props => {

    return (
        <div className="h-16 w-5/6 m-auto mb-4 flex flex-row items-center justify-start overflow-x-clip">
            {props.photolist.map((photo, index) => {
                return <div className="w-22 h-full mr-[4%] last-of-type:mr-0 cursor-pointer hover:opacity-70 duration-300">
                    <img key={index} className="w-full h-full" src={photo.photoUrl} alt=""/>
                </div>
            })}
        </div>
    )
}

export default ImageSlider;