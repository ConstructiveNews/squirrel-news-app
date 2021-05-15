import React, { CSSProperties } from "react";
import {Plugins } from '@capacitor/core';
import logo from '../assets/squirrel-donate.jpg';
import { valFor } from '../api/language';
import { AppContext } from "../contexts";


const {Browser} = Plugins; 


// set the width of the page to the width of the screen
const pageWidth: number = window.screen.width;
var style: CSSProperties = {
    width: pageWidth + 'px',
  }


export const DonationPage: React.FC = () => {

    async function openBrowser(url: string){
      await Browser.open({url});
    }
    
    return(
        <AppContext.Consumer>
          { ({language}) => (
            <div className="flex flex-col h-full snap-child mt-6" style={style}>
              {/* <div className="relative"> */}
                <div className="_logo_container w-full h-auto" style={style}>
                    <img className=" h-48 w-48 mt-12 m-auto object-cover p-0 overflow-hidden rounded-full" src={logo} alt='donate' onClick={ () => openBrowser(valFor(language, 'donate.link'))}></img>
                </div>
                <div className="_support_us w-10/12 h-12 mx-auto mt-24 text-2xl">{ valFor(language, 'donate.title')}</div>
                <div className="_support_us w-10/12 h-auto mx-auto text-lg">{ valFor(language, 'donate.text')}</div>
              {/* </div> */}
          </div>
          )}
        </AppContext.Consumer>
    );

}
