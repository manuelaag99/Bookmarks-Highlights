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

    const deleteButtonHandle = () => {
        console.log("deleted!")
        closeDeleteWindow()
    }

    return (
    <div className="flex flex-wrap md:flex-col flex-row w-full absolute top-0 md:h-1/4 h-16 justify-between">
        <Link className="md:w-1/12 w-1/10 md:h-16 h-full" to={props.route} state={props.stateToSend}>
            <BackBtnForAddOrUpdate/>
        </Link>
        <div className="md:h-6/10 h-full flex flex-wrap flex-row justify-around md:w-full w-6/10">
            {props.isUpdating && <AddUpdateDeleteBtn  classnames=" bg-red-btn hover:bg-red-hvr " buttonClick={openDeleteWindow} isAbled={true} isDeleteBtn={true} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ? "/" + props.userid + "/bandhs" : "/" + props.userid + "/myprofile"} buttonText="delete" />}
            <AddUpdateDeleteBtn classnames=" bg-var-4 hover:bg-var-4-hovered " buttonClick={props.addUpdateBtn} type={props.type} form={props.form} isAbled={props.isAddOrUpdateBtnAbled} isDeleteBtn={false} isAddBtn={props.isAddButton} linkRoute={props.isUpdating ?  "/" + props.userid + "/bandhs" : "/" + props.userid + "/myprofile"} buttonText={props.isUpdating ? "update" : "add"} />
            <ConfirmDelete open={showDeleteWindow} onDelete={deleteButtonHandle} onClose={closeDeleteWindow} />
        </div>
    </div>
    )
}

export default TopForAddOrUpdate;
