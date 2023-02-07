import React from "react";
import { Link } from "react-router-dom";

import PhotoWindow from "./Portals/PhotoWindow";
import SettingsCommand from "./SettingsCommand";

const BandHsPhotoCard = props => {
    console.log(props)

    return (
        <div className="rounded-tag shadow-card xl:w-9/10 md:w-88 w-full h-96 bg-var-2 p-4 box-border flex flex-col flex-wrap hover:h-102 duration-500 justify-center mb-14 sm:mx-5 xl:mx-auto">
            <div className="flex flex-row flex-wrap h-1/10 w-full justify-between font-bold">
                <div className="">page #{props.page}</div>
                <div>{props.date}</div>
            </div>
            <div className="h-7/10 w-full bg-var-7">
                <img onClick={()=>{
                    console.log(props)
                    return <PhotoWindow windowOpen={true}/>
                }} 
                className="h-full justify-center object-contain cursor-pointer" src={props.photosrc} alt="" />
            </div>
            <div className="h-2/10 w-full pt-2.5 relative">
                <p className="inline pr-2">tags: </p>
                {props.taglist.map((tag, index) => {
                    return <div key={index} className="inline-block w-fit py-0.5 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">
                        <p>{tag}</p>
                    </div>
                })}
                <Link to={"/" + props.userid + "/" + props.bookid + "/update/" + props.itemid} state={{ userid: props.userid, bookid: props.bookid, title: props.title, entries: props.entries, itemid: props.itemid}}>
                    <SettingsCommand isProfilePage={false} isBandHsPhotoCard={true} />
                </Link>
            </div>
        </div>
    )
}

export default BandHsPhotoCard;