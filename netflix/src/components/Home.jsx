import React, {useState,useEffect} from "react";
import Section from "./Section";
import TvShows from "./TvShows";

const Home = ({search}) => {

    return(
        <>
        <TvShows /> 
        {search? ( <Section heading="Search Results" title={search} />) : (<>
                  <Section heading="Harry Potter" title="Harry Potter"/>
                  <Section heading="Marvel" title="Marvel"/>
                  <Section heading="Lord of the Rings" title="Lord of the Rings"/>
                  <Section heading="Horror" title="Horror"/>
                </>)}
        </>
    )
}

export default Home