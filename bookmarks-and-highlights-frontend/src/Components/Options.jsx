import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Options = props => {
    const [ searchText, setSearchText ] = React.useState("")

    const searchInputHandle = (event) => {
        const searchInput = event.target.value
        setSearchText(() => {
            return searchInput
        })
        props.searchButton(searchText)
    }

    return (
        <div className={"profile-options min-h-16 flex flex-row justify-between text-var-6 md:text-dsk-options opacity-40 md:w-10/12 w-full " + (props.margins ? "md:mb-3 mb-1.5" : null) + (props.margins ? " md:mt-12 mt-6" : null)}>
            <div className="h-16 w-2/5 flex items-center">
                <form onSubmit={() => {{props.searchButton(searchText)}}} action="" method="get">
                    <p className="inline-block">search </p>
                    <input className="inline-block bg-var-3 outline-none w-1/2 ml-2 pt-1" onChange={searchInputHandle} value={searchText} type="text" placeholder="Title" autoComplete="off"/>
                    <button onClick={(e) => {e.preventDefault()
                        {props.searchButton(searchText)}
                    }}><SearchIcon /></button>
                </form>
            </div>
            <div className="h-16 w-3/5 flex items-center">
                <div className="w-full h-8 text-right mb-[-12px]">
                    <form id="profile-sorting-cards" action="/myprofile" method="get" >
                        <label className="inline-block">{props.rightText}</label>
                        <select onChange={(event) => {{props.groupButton(event.target.value)}}} className="bg-var-3 border-none outline-none md:w-1/4 w-1/2 pl-2 pr-0" form="profile-sorting-cards" name="sort-type" id="sort-type">
                            <option value="Title">Book/Article Title</option>
                            <option value="Tags">Tags</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Options;