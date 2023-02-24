import React from "react";
import { Link } from "react-router-dom";

import AddUpdateDeleteBtn from "../Components/AddUpdateDeleteBtn";
import BackBtnForAddOrUpdate from "./BackBtnForAddOrUpdate";
import ConfirmDelete from "./Portals/ConfirmDelete";

const TopForAddOrUpdate = props => {
    const [ showDeleteWindow, setShowDeleteWindow ] = React.useState(false)
    const closeDeleteWindow = () => {
        setShowDeleteWindow(() => false)
    }

    const openDeleteWindow = () => {
        setShowDeleteWindow(() => true)
    }

    return (
    <div className="flex flex-wrap md:flex-col flex-row w-full absolute top-0 md:h-1/4 h-1/10 min-h-30 justify-between">
        <Link className="w-15 md:h-1/3 h-full" to={props.route} state={props.stateToSend}>
            <BackBtnForAddOrUpdate/>
        </Link>
        <div className="md:h-2/3 h-full flex flex-wrap flex-row justify-around md:w-full w-6/10">
            {props.isUpdating && <AddUpdateDeleteBtn buttonClick={openDeleteWindow} isAbled={true} isDeleteBtn={true} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ? "/" + props.userid + "/bandhs" : "/" + props.userid + "/myprofile"} buttonText="delete" />}
            <AddUpdateDeleteBtn buttonClick={props.addUpdateBtn} type={props.type} form={props.form} isAbled={props.isAddOrUpdateBtnAbled} isDeleteBtn={false} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ?  "/" + props.userid + "/bandhs" : "/" + props.userid + "/myprofile"} buttonText={props.isUpdating ? "update" : "add"} />
            <ConfirmDelete open={showDeleteWindow} onClose={closeDeleteWindow} />
        </div>
    </div>
    )
}

export default TopForAddOrUpdate;
