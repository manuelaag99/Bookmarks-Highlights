import React from "react";
import { Link } from "react-router-dom";

import AddUpdateDeleteBtn from "../Components/AddUpdateDeleteBtn";
import BackBtnForAddOrUpdate from "./BackBtnForAddOrUpdate";

const TopForAddOrUpdate = props => {
    return (
    <div className="flex flex-wrap md:flex-col flex-row w-full absolute top-0 md:h-3/10 h-1/10 justify-between">
        <Link className="w-15 md:h-1/3 h-full" to={props.route}>
            <BackBtnForAddOrUpdate/>
        </Link>
        <div className="md:h-1/3 h-full flex flex-wrap flex-row justify-around md:mb-8 md:w-full w-1/2">
            {props.isUpdating ? <AddUpdateDeleteBtn isDeleteBtn={true} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ? "/bandhs" : "/myprofile"} buttonText="delete" /> : null}
            <AddUpdateDeleteBtn isDeleteBtn={false} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ? "/bandhs" : "/myprofile"} buttonText={props.isUpdating ? "update" : "add"} />
        </div>
    </div>
    )
}

export default TopForAddOrUpdate;
