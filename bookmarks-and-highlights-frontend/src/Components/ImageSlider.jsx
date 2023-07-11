import React from "react";

export default function ImageSlider ({ photolist }) {
    return (
        <div className="h-16 w-5/6 mt-3 mb-5 mx-auto flex flex-row items-center justify-start overflow-x-clip">
            {photolist.map((photo, index) => {
                return <div key={index} className="w-22 h-full mr-[4%] last-of-type:mr-0 cursor-pointer hover:opacity-70 duration-300">
                    <img className="w-full h-full object-cover " src={"http://localhost:3000/" + photo.photoUrl} alt=""/>
                </div>
            })}
        </div>
    )
}