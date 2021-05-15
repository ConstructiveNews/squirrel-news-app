import React, { useState } from "react";
import {NavMenu} from "../NavMenu/NavMenu";

// SVG imports 
import { ReactComponent as Logo } from '../../assets/icon/sn-logo-name.svg'; 
import { ReactComponent as BurgerMenu } from '../../assets/icon/burger-menu.svg';

interface Props{
    // Prop declariation in the interface
    // variable_name: type
}

export const NavBar: React.FC<Props> = () => {

    const [navMenu, setNavMenu] = useState(false);

    function toggleMenu(){
        if (navMenu){
            setNavMenu(false)
        }else{
            setNavMenu(true)
        }
    }
    

    return(
        <div>
            
            {/* Nav-Menu */} 
            <div>
                <NavMenu open={navMenu} />
                {navMenu && (<div className="_menu_tranparent absolute h-screen w-full semi z-10 " onClick={toggleMenu}></div>)}
            </div>
            
            <div className="header_container flex flex-row w-full h-20 pt-3 pb-2 bg-gradient-to-b from-gray-700">
                <div className="w-1/2 h-full">
                    <Logo className="_squirrel_news_logo h-12 w-auto mt-auto mb-auto ml-4 mr-auto p-0"/>
                </div>
                {/* Menu div */}
                <div className="w-1/2 flex flex-row-reverse ml-auto mt-0">
                    <BurgerMenu className="_burger_menu h-12 w-auto mr-2 ml-0 mt-auto mb-auto p-0" onClick={toggleMenu}/>
                </div>
            </div>

            
        </div>
    )

}
