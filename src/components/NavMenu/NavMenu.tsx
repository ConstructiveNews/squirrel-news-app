import React from "react";
import { Link } from 'react-router-dom';
// SVG imports 
import { ReactComponent as SqIconLogo } from '../../assets/icon/sn-logo.svg'; // Wrap the svg logo in a component container


// TODO: Animate the menui sliding in from the side




interface Props{
    // Prop declariation in the interface
    // variable_name: type
    open: boolean 
}

const style: string = "_menu_item w-full h-16 text-2xl text-center align-bottom"

export const NavMenu: React.FC<Props> = ({open}) => {


    return(
        <div>
            
            {/* Nav-Menu */} 
            <div className={"_menu flex flex-col absolute h-screen w-11/12 bg-white shadow z-20" + (open ? " right-0" : "")}>
                <div className="_spacer w-full h-40">
                    <SqIconLogo className="_icon_logo h-32 w-auto m-auto"/>
                </div>

                <div className={style}>
                    German Version
                </div>

                <div className={style}>
                    <Link to="/archive"> All Issues </Link>
                </div>

                <div className={style}>
                    <Link to="/favorites"> Favourites </Link>
                </div>
  
                <div className={style}>
                    <Link to="/about"> About Us </Link>
                </div>

                <div className={style}>
                   <Link to="/donate"> Support Us </Link>
                </div>

                <div className={style}>
                    <Link to="/imprint"> Imprint </Link>
                </div>

                <div className={style}>
                    <Link to="/privacy"> Privacy Policy </Link>
                </div>

            </div>
           
        </div>
    )

}
