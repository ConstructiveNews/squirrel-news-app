import React, { CSSProperties } from "react";
import {Plugins } from '@capacitor/core';
import logo from '../assets/squirrel-donate.jpg';



// set the width of the page to the width of the screen
const pageWidth: number = window.screen.width;
var style: CSSProperties = {
    width: pageWidth + 'px',
  }
const {Browser} = Plugins; 

interface DonationInfo{ 
    id: number;
    headline: string; 
    body: string;
}


interface Props{
info: DonationInfo
}




export const DonationPage: React.FC<Props> = ({info}) => {

     async function openBrowser(url: string){
        await Browser.open({url});
    }
    
    if (info.headline === undefined){
        style = {
            display: 'none'
        }
    }
    
    return(
        <div className="flex flex-col h-full w-screen snap-child" style={style}>
            {/* <div className="relative"> */}
              <div className="_logo_container w-full h-auto" style={style}>
                  <img className=" h-48 w-48 mt-12 m-auto object-cover p-0 overflow-hidden rounded-full" src={logo} alt='donate' onClick={ () => openBrowser("https://squirrel-news.net/support-us/")}></img>
              </div>
              <div className="_support_us w-10/12 h-12 mx-auto mt-24 text-2xl">{info.headline}</div>
              <div className="_support_us w-10/12 h-auto mx-auto text-lg">{info.body}</div>
            {/* </div> */}
        </div>
    );

}
