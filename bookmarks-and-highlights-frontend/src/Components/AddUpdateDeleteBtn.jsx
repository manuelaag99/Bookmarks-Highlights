import React from "react";
import { Link } from "react-router-dom";

const AddUpdateDeleteBtn = props => {

    //<Link className={"flex flex-wrap justify-center items-center " + (props.isAddBtn ? " md:w-9/10 w-2/3" : "w-1/3")} to={props.linkRoute}>

    return (
        <div className={"flex flex-wrap justify-center items-center " + (props.isAddBtn ? " md:w-9/10 w-2/3" : "w-1/3")}>
            <button onClick={props.buttonClick} type={props.type} form={props.form} disabled={props.isAbled ? false : true} className={"duration-300 cursor-pointer rounded-tag shadow-card md:text-dsk-addBandHbtns text-mob-addBandHbtns text-var-1 font-bold disabled:bg-var-7 min-h-2/3 my-auto " + (props.isAddBtn ? " w-9/10" : " w-full") + props.classnames}>{props.buttonText}</button>
        </div>
    )
}

export default AddUpdateDeleteBtn;