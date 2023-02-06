import React from "react";
import { useParams, useLocation } from "react-router-dom";

import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";
import PhotoForAddOrUpdate from "../Components/PhotoForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";


const TAGLIST = ["history", "germany", "world war two"]
// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
const AddBandH = props => {
    const location = useLocation();
    const { userid } = location.state
    console.log(userid);

    return (

        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate isUpdating={false} isAddButton={true} route={"/" + userid + "/myprofile"}/>
            <div className="w-85 md:h-6/10 h-8/10 md:mt-32 mt-16 flex flex-wrap flex-row">
                <PhotoForAddOrUpdate photo="" />

                <div className="md:w-2/3 w-3/5 md:h-7/10 h-3/10 pl-6 block md:hidden">
                    <div>
                        <p className="mt-3 text-add-or-update-p font-bold">Title of the book/article:</p>
                        <input className="mt-1 pl-2 h-8 w-95 outline-none" type="text" placeholder="e.g. The History of..." />
                    </div>
                </div>

                <div className="h-7/10 w-full md:w-2/3 pl-3">
                    
                    <div className="md:w-2/3 w-3/5 md:h-2/10 hidden md:block">
                        <FormForAddOrUpdate pText="Title of the book/article:" placeholderText="e.g. The History of..." />
                    </div>
                    <div className="flex flex-wrap flex-row justify-evenly">                    
                        <div className="w-2/3 h-3/10">
                            <FormForAddOrUpdate pText="date:" placeholderText="DD/MM/YYYY" />
                        </div>
                        <div className="w-1/3 h-3/10">
                            <FormForAddOrUpdate pText="page #:" placeholderText="e.g. 31, 105" />
                        </div>
                    </div>
                    <div>
                        <FormForAddOrUpdate pText="tags:" placeholderText="e.g. geography..." />
                    </div>

                    <div className="mt-5">
                    {TAGLIST.map((tag, index) => {
                        return <div key={index} className="inline-block w-fit py-0.5 px-2.5 rounded-tag cursor-pointer mr-1 mb-2 bg-var-7 hover:bg-var-6 duration-300">
                            <p>{tag}</p>
                        </div>
                    })}
                    </div>

                </div>
            </div>
        </div>


    )
}

export default AddBandH;