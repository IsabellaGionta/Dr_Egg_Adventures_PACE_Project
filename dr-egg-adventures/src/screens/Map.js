import React  from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

let isDown = false;
let startX;
let scrollLeft;
class Map extends React.Component {
    constructor(props) {
      super(props);
      this.MapID = React.createRef();
    }
    render(){
    return (
        <div className="Map-Container">
            <HelmetProvider><Helmet>
                <title>Map</title>
            </Helmet></HelmetProvider>
            <div 
                className = "Map"
                ref = {this.MapID}
                onMouseDown = {(e) => {
                    e.preventDefault();
                    isDown = true;
                    startX = e.pageX - this.MapID.current.offsetLeft;
                    scrollLeft = this.MapID.current.scrollLeft;
                    }
                }
                onMouseLeave = {
                    () => {
                        isDown = false;
                    }
                }
                onMouseUp = {
                    () => {
                        isDown = false;
                    }
                }
                onMouseMove = {
                    (e) => {
                        if (!isDown) return;
                        e.preventDefault();
                        const x = e.pageX - this.MapID.current.offsetLeft;
                        const walk = x - startX;
                        this.MapID.current.scrollLeft = scrollLeft - walk;
                    }
                }
            >
                <div className = "BtnContain">
                    <a href="/Game">
                        <div className = "GamesHeading"/>
                    </a>
                    <a href="/Contact">
                        <div className = "ContactHeading"/>
                    </a>
                    <a href="/Characters">
                        <div className = "CharactersHeading"/>
                    </a>
                    <a href="/Lab">
                        <div className = "LabHeading"/>
                    </a>
                    <a href="/Worlds">
                        <div className = "WorldsHeading"/>
                    </a>
                    <a href="/Trailer">
                        <div className = "TrailerHeading"/>
                    </a>
                    <a href="/Resources">
                        <div className = "ResourcesHeading"/>
                    </a>
                    <a href="/online-store">
                        <div className = "OnlineStoreHeading"/>
                    </a> 
                </div>
            </div>

        </div>            
    )}
}
export default Map;