import React from "react";

import FormForAddOrUpdate from "../Components/FormForAddOrUpdate";
import PhotoForAddOrUpdate from "../Components/PhotoForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

const UpdateBandH = props => {
    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate isUpdating={true} isAddButton={false} route="/:userid/bandhs/:bookid"/>
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
                </div>
            </div>
        </div>
    )
}

export default UpdateBandH;