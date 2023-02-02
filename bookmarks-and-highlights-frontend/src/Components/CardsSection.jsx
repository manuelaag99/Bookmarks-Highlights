import React from "react";

import Card from "./Card";

const CardsSection = props => {
    return (
        <div className="profile-cards w-10/12 flex flex-wrap mt-4 mb-20 md:justify-between justify-center">
            <Card title={CARDTITLE} numberOfPhotos={NUMBOFPHOTOS} photos={DUMPPHOTOS}/>   
        </div>
    )
}

export default CardsSection;