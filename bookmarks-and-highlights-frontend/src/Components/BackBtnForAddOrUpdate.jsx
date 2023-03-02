import React from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackBtnForAddOrUpdate () {
    return (
        <div className="w-full h-full">
            <button className="h-full w-full duration-300 hover:shadow-card"><ArrowBackIcon /></button>
        </div>
    )
}