import React from "react";

export default function WindowForInputInfo ({ classnames, windowInfoText }) {
    return (
        <div className="relative">
            <div className={"bg-var-1 h-fit w-36 border-solid border-2 absolute shadow-card sm:left-5 sm:top-[-4px] left-[-200px] top-14 z-20 " + classnames}>
                <p className="p-1">{windowInfoText}</p>
            </div>
        </div>
    );
};