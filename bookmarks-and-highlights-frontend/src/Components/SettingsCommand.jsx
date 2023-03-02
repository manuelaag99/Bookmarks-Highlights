import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';

export default function SettingsCommand ({ isProfilePage }) {
    return (
        <button className={"absolute " + (isProfilePage ? "right-6 top-6" : "right-0 bottom-0")}>
            <SettingsIcon className="text-var-5 hover:text-var-4 h-10 duration-500" />
        </button>
    )
}