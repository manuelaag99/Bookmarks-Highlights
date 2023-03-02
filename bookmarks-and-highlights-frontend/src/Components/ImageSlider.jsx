import React from "react";

export default function ImageSlider (props) {
    return (
        <div className="h-16 w-5/6 m-auto md:mb-4 mb-7 flex flex-row items-center justify-start overflow-x-clip">
            {props.photolist.map((photo, index) => {
                return <div key={index} className="w-22 h-full mr-[4%] last-of-type:mr-0 cursor-pointer hover:opacity-70 duration-300">
                    <img className="w-full h-full" src={photo.photoUrl} alt=""/>
                </div>
            })}
        </div>
    )
}