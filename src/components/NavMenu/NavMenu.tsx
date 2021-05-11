import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
// SVG imports 
import { ReactComponent as SqIconLogo } from '../../assets/icon/sn-logo.svg'; // Wrap the svg logo in a component container

import { valFor, getStoredLang, storeLang } from '../../api/language';
import { LANGUAGES } from "../../models";
import { AppContext } from "../../contexts";

interface Props{
    // Prop declariation in the interface
    // variable_name: type
    open: boolean
}

const style: string = "_menu_item w-full h-16 text-2xl text-center align-bottom"

export const NavMenu: React.FC<Props> = ({open}) => {
  
  const handleLanguageSwitch = (current: LANGUAGES) => {

    if (current === 'de') {
      storeLang(LANGUAGES.EN);
    } else {
      storeLang(LANGUAGES.DE);
    }
    window.location.href = "/"
  }

  return(
      <AppContext.Consumer>
        { ( {language, setLoading} ) => (

          <div>
          {/* Nav-Menu */} 
          <div className={"_menu flex flex-col absolute h-screen w-11/12 bg-white shadow z-20" + (open ? " right-0" : "")}>
              <div className="_spacer w-full h-40">
                  <SqIconLogo className="_icon_logo h-32 w-auto m-auto"/>
              </div>

              <div className={style}>
                <button 
                  className=" background-transparent px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  onClick={ () => { handleLanguageSwitch(language)} }
                  >
                  { valFor(language, 'lang.switch')}
                </button>
              </div>

              <div className={style}>
                  <Link to="/archive">
                    { valFor(language, 'issues.all') }
                  </Link>
              </div>

              <div className={style}>
                  <Link to="/favorites">
                    { valFor(language, 'issues.favorites') } 
                  </Link>
              </div>

              <div className={style}>
                  <Link to="/about">
                    { valFor(language, 'about.name') }
                  </Link>
              </div>

              <div className={style}>
                  <Link to="/donate">
                    { valFor(language, 'support.name') }
                  </Link>
              </div>

              <div className={style}>
                  <Link to="/imprint">
                    { valFor(language, 'imprint.name') }
                  </Link>
              </div>

              <div className={style}>
                  <Link to="/privacy">
                    { valFor(language, 'privacyPolicy.name') }
                  </Link>
              </div>
          </div>
      </div>
      )}
      </AppContext.Consumer>
  )
}
