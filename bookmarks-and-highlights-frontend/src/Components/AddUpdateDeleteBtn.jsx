import React from "react";
import { Link } from "react-router-dom";

const AddUpdateDeleteBtn = props => {

    //<Link className={"flex flex-wrap justify-center items-center " + (props.isAddBtn ? " md:w-9/10 w-2/3" : "w-1/3")} to={props.linkRoute}>

    return (
        <div className={"flex flex-wrap justify-center items-center " + (props.isAddBtn ? " md:w-9/10 w-2/3" : "w-1/3")}>
            <button type={props.type} form={props.form} disabled={props.isAbled ? false : true} className={"duration-300 cursor-pointer rounded-tag shadow-card text-addBandHbtns text-var-1 font-bold disabled:bg-var-7 min-h-2/3 my-auto " + ( props.isDeleteBtn ? " bg-red-btn hover:bg-red-hvr " :  " bg-var-4 hover:bg-var-4-hovered ") + (props.isAddBtn ? " w-9/10" : " w-full")}>{props.buttonText}</button>
        </div>
    )
}

export default AddUpdateDeleteBtn;