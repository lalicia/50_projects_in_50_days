import React from "react";
import {useState} from "react";

import "./ExpandingCards.css";

import ExpandingCard from "./ExpandingCard.js";
import HomeButton from "../../components/HomeButton.js";

function ExpandingCards({ecdata}) {
    const [data, setData] = useState(ecdata)

    //this is working and changing the state, can tell from console.logs    
    const onPanelClick = (id) => {
        let newData = [...data];
        //console.log(id);

        newData.map((item) => item.id === id ? item.active = true : item.active = false);
        setData(newData);
        //console.log(newData)
    }

    return (
        <div className="ec-container">
            {data.map((card) => <ExpandingCard key={card.id} id={card.id} title={card.title} url={card.url} active={card.active} onPanelClick={onPanelClick}/>
            )}
            <HomeButton />
        </div>
    )
}

export default ExpandingCards;



//prior to refactoring with component
{/* <div className={styles.container}>
<div className={!expanded ? styles.panel : styles.panelactive} style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" + ")"}} onClick={handleClick}>
    <h3>Castle in the mist</h3>
</div>
<div className={!expanded ? styles.panel : styles.panelactive} style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1605530681433-b11727bb4476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")"}} onClick={handleClick}>
    <h3>Blue-purple flowers</h3>
</div>
<div className={styles.panel} style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1617880860458-8cb458c177c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")"}}>
    <h3>Grogu prism</h3>
</div>
<div className={styles.panel} style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1506367861045-27937c3a8e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" + ")"}}>
    <h3>Sun through the trees</h3>
</div>
<div className={styles.panel} style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1551639325-0f0d88fc2413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")"}}>
    <h3>Winter misty lake</h3>
</div>
</div> */}