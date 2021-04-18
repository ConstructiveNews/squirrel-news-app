import React, { CSSProperties } from "react";
// set the width of the page to the width of the screen


const pageWidth: number = window.screen.width;
const style: CSSProperties = {
    width: pageWidth + 'px',
  }

// interface Article{ 
//     id: number;
//     date: string;
//     image: string;
//     image_credit: string;
//     link: string;
//     headline: string;
//     provider: string;
//     description: string;
// }

interface Props{
    // Prop declariation in the interface
    // variable_name: type


    /* This component should take in an article object with the following attributes; 
        Article
        {
            id: 
            date: 
            article image: 
            article link: 
            article headline: 
            article provider: 
            article description: 
        }
    */
    headline: string;
    image: string; 
    date: string;
    imageCredit: string;
}




export const IssueCoverPage: React.FC<Props> = ({headline, image, date, imageCredit}) => {

    

    
    
    return(
        <div className="flex flex-col-reverse h-full snap-child" style={style} >


            {/* Article information div */}

            <div className="_article_info h-auto  mb-4 p-0" style={style}>
                <div className="_article_headline text-lg font-medium ml-3 mt-2 ">{headline}</div>
                <div className="_article_provider ml-3 my-2">{imageCredit}</div>
                <div className="_article_description text-sm ml-3 text-gray-700">ISSUE: {date}</div>   
            </div> 
        
            {/* Image container div */}
            <div className="relative h-full w-auto">            
                
              <div className="_image_container h-full m-0 p-0" style={style}>
                  <img className=" h-full object-cover p-0 m-0 overflow-hidden" src={image} alt="article" style={style}/>
              </div>
              
              <div className="_date absolute ml-1 bottom-0 left-0 text-left text-white"></div>
              <div className="_image_credit absolute mr-1 bottom-0 right-0 text-right text-white">{imageCredit}</div>
          
            </div>


        </div>
    );

}
