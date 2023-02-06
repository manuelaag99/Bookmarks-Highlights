import React from "react";

const InputsForAuth = props => {
    return (
        <div className="my-0 py-0 h-24 w-full flex flex-wrap justify-center">
            <input className="border-solid border-2 outline-none rounded-tag block mb-0 pb-0 mt-2 h-12 w-9/10 text-center" type="text" placeholder={props.textForUpperInput} autoComplete="off"/>
            <input className="border-solid border-2 outline-none rounded-tag block mb-0 pb-0 mt-5 h-12 w-9/10 text-center" type="password" placeholder={props.textForLowerInput} autoComplete="off"/>
        </div>
    )
}

export default InputsForAuth;