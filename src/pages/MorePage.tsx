import React, { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import { valFor } from '../api/language';
import { AppContext } from '../contexts';
import { Plugins } from '@capacitor/core';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5';


const { Browser } = Plugins; 

const pageWidth: number = window.screen.width;
var style: CSSProperties = {
  width: pageWidth + 'px',
}

const link = "h-16 text-2xl text-center align-bottom";

export const MorePage: FC<{nextIssueId: number}> = ({ nextIssueId }) => {
  
  const handlePrev = () => {
    window.location.href= `/issue/${nextIssueId}`;
  }

  async function openBrowser(url: string){
    await Browser.open({url});
  }
  
  return (
    <AppContext.Consumer>
      {( {language} ) => (
        <div className="flex flex-col h-full snap-child" style={style}>
          <div className="w-screen my-auto center">
            <div className={`${link} pointer`} onClick={handlePrev}>
                { valFor(language, 'issues.previous') }
            </div>
            <div className={link}>
              <Link to="/archive">
                { valFor(language, 'issues.all') }
              </Link>
            </div>
            <div className={link}>
              <Link to="/favorites">
                { valFor(language, 'issues.favorites') }
              </Link>
            </div>
            <div className="flex flex-row mx-auto text-center">
              
              <IoLogoFacebook onClick={ () => openBrowser(valFor(language, 'links.facebook'))} className="h-10 w-1/3 mx-auto" />
              <IoLogoInstagram onClick={ () => openBrowser(valFor(language, 'links.instagram'))} className="h-10 w-1/3 mx-auto" />
              <IoLogoTwitter onClick={ () => openBrowser(valFor(language, 'links.twitter'))} className="h-10 w-1/3 mx-auto" />
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}