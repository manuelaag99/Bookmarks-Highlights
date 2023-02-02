import React from "react";

const Options = props => {
    return (
        <div className="profile-options h-16 flex flex-row justify-between text-var-6 md:text-dsk-options opacity-40 md:w-10/12 w-9/12" style={{marginBottom: props.margins ? "13px" : null, marginTop: props.margins ? "50px" : null}} >
            <div className="h-16 w-2/5 flex items-center">
                <form action="" method="get">
                    <p className="inline-block">search </p>
                    <input className="inline-block bg-var-3 outline-none w-1/2 ml-2 pt-1" type="text" placeholder="Title" autoComplete="off"/>
                </form>
            </div>
            <div className="h-16 w-2/5 flex items-center">
                <div className="w-full h-8 text-right">
                    <p className="inline-block">group by: </p>
                    <input className="inline-block bg-var-3 outline-none w-1/2 pl-2 pr-0" list="query" name="" id="" autoComplete="off"/>
                </div>            
            </div>
        </div>
    )
}

export default Options;