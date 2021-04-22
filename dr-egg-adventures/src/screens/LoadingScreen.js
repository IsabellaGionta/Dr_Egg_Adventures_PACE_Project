



import React from 'react';
import LoadingGif from '../images/Loading2.gif';
import LoadingScreen from 'react-loading-screen';

export const Loading = () => {
    return (


<div className="Loading-Background-Container"> 
            <img className="Loading-gif" src={LoadingGif} alt="Loading Gif" />
        </div>
)
}
export default Loading


{/* <LoadingScreen
loading={true}
bgColor='#f1f1f1'
spinnerColor='#9ee5f8'
textColor='#676767'
lSrc={LoadingScreen}
> 

</LoadingScreen> */}
