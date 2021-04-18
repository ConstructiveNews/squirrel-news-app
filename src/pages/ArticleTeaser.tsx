import React, { CSSProperties } from "react";
import {Plugins } from '@capacitor/core';
import { FAB } from "../widgets/FAB";
// set the width of the page to the width of the screen


const pageWidth: number = window.screen.width;
const style: CSSProperties = {
    width: pageWidth + 'px',
  }

  const {Browser} = Plugins; 


interface Article{ 
    id: number;
    date: string;
    image: string;
    image_credit: string;
    link: string;
    headline: string;
    provider: string;
    description: string;
}

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
    article: Article;
}




export const ArticleTeaser: React.FC<Props> = ({article}) => {

     async function openBrowser(url: string){
        await Browser.open({url});
    }
    
    
    return(
        <div className="flex flex-col-reverse h-full snap-child" style={style} >
            <div className="flex justify-center space-x-4">
              <FAB icon="heart" onClick={ () => console.log('heart clicked')} />
              <FAB icon="share" onClick={ () => console.log('share clicked')} />
            </div>

            {/* Article information div */}

            <div className="_article_info h-auto  mb-4 p-0" style={style}>
                <div className="_article_headline text-lg font-medium ml-3 mt-2 ">{article.headline}</div>
                <div className="_article_provider ml-3 my-2">{article.provider}</div>
                <div className="_article_description text-sm ml-3">{article.description}</div>   
            </div> 
        
            {/* Image container div */}
            <div className="relative h-full w-auto">            
                
              <div className="_image_container h-full m-0 p-0" style={style}>
                  <img className=" h-full object-cover p-0 m-0 overflow-hidden" src={article.image} alt="article" onClick={ () => openBrowser(article.link)} style={style}/>
              </div>
              
              <div className="_date absolute ml-1 bottom-0 left-0 text-left text-white">{article.date}</div>
              <div className="_image_credit absolute mr-1 bottom-0 right-0 text-right text-white">{article.image_credit}</div>
          
            </div>


        </div>
    );

}
