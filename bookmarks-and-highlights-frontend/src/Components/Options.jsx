import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Options (props) {
    const [ searchText, setSearchText ] = React.useState("")

    const searchInputHandle = (e) => {
        const searchInput = e.target.value
        setSearchText(() => {
            return searchInput
        })
    }

    return (
        <div className={"min-h-16 flex sm:flex-row flex-col justify-between text-var-6 md:text-dsk-options opacity-40 md:w-10/12 w-full " + (props.margins ? "md:mb-3 mb-1.5" : null) + (props.margins ? " md:mt-12 mt-6" : null)}>
            <div className="h-16 sm:w-2/5 w-full flex items-center sm:justify-start justify-center sm:mt-0 mt-3">
                <form onSubmit={() => {{props.searchButton(searchText)}}} action="" method="get">
                    <p className="inline-block">search </p>
                    <input className="inline-block bg-var-3 outline-none ml-2 pt-1 sm:w-1/2 w-2/3" onChange={searchInputHandle} value={searchText} type="text" autoComplete="off"/>
                    <button onClick={(event) => {event.preventDefault()
                        {props.searchButton(searchText)}
                    }}><SearchIcon /></button>
                </form>
            </div>
            <div className="h-16 sm:w-3/5 w-full flex items-center sm:justify-end justify-center">
                <div className="w-full h-8 sm:text-right text-center mb-[-12px]">
                    <form id="profile-sorting-cards" action="/myprofile" method="get" >
                        <label className="inline-block">{props.rightText}</label>
                        <select onChange={(event) => {{props.groupButton(event.target.value)}}} className="bg-var-3 border-none outline-none md:w-1/4 w-1/2 pl-2 pr-0" form="profile-sorting-cards" name="sort-type" id="sort-type">
                            <option value="bookTitle">Book/Article Title</option>
                            <option value="tags">Tags</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}