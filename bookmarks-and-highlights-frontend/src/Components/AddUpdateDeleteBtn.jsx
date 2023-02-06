import React from "react";
import { Link } from "react-router-dom";

const AddUpdateDeleteBtn = props => {
    return (
            <div className={"duration-300 cursor-pointer h-2/3 my-auto rounded-tag shadow-card flex flex-wrap justify-center items-center " + ( props.isDeleteBtn ? " bg-red-btn hover:bg-red-hvr " :  " bg-var-4 hover:bg-var-4-hovered ") + (props.isAddBtn ? " w-85" : " w-1/3")}>
                <Link to={props.linkRoute}>
                    <button className="text-addBandHbtns text-var-1 font-bold">{props.buttonText}</button>
                </Link>
            </div>
    )
}

export default AddUpdateDeleteBtn;