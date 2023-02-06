import React from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackBtnForAddOrUpdate = props => {
    return (
        <div className="w-full h-full">
            <button className="h-full w-full duration-300 hover:shadow-card"><ArrowBackIcon /></button>
        </div>
    )
}

export default BackBtnForAddOrUpdate;