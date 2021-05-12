import React, { CSSProperties, useEffect, useState } from "react";
import {Plugins } from '@capacitor/core';
import { IoHeartOutline, IoHeart  } from 'react-icons/io5';
import { FiShare2 } from 'react-icons/fi';

import { isFav, addFav, removeFav } from '../api/favorites';

// set the width of the page to the width of the screen
const pageWidth: number = window.screen.width;
const style: CSSProperties = {
    width: pageWidth + 'px',
  }

  const {Browser, Share} = Plugins; 


interface Article{ 
    id: number;
    articleId: string;
    date: string;
    image: string;
    image_credit: string;
    link: string;
    headline: string;
    provider: string;
    description: string;
}

interface Props{
    issue: string
    article: Article;
}


export const ArticleTeaser: React.FC<Props> = ({issue, article}) => {

  const [liked, setLiked] = useState<boolean>(false);

  async function openBrowser(url: string){
    await Browser.open({url});
  }
  
  const handleLike = () => {
    const remove = async () => {
      await removeFav(issue, article.articleId);
    }

    const add = async () => {
      await addFav(issue, article.articleId);
      setLiked(true);
    }
    if (liked) {
      remove();
    } else {
      add();
    }
  }

  const handleShare = async () => {
    try {
      await Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies'
      })

    } catch (e) {
      // add Toast Message or somethng else here
    }
    
  }

  useEffect( () => {
    const fetchFav = async () => {
      const fav = await isFav(issue, article.articleId);
      setLiked(fav);      
    }

    fetchFav();
  })

  return(
      <div className="flex flex-col-reverse h-full snap-child" style={style} >

            <div className="_article_info h-auto  mb-4 p-0" style={style}>
                <div className="_article_headline text-lg font-medium ml-3 mt-2 ">{article.headline}</div>
                <div className="_article_provider ml-3 my-2">{article.provider}</div>
                <div className="_article_description text-sm ml-3">{article.description}</div>   
            </div>
            
            <div className="flex flex-row w-1/3 p-2">
                <button onClick={handleLike} className="mx-2">
                  { liked
                    ? <IoHeart className="m-auto" />
                    : <IoHeartOutline className="m-auto" />  
                  }
                </button>
                <button onClick={handleShare} className="mx-2">
                  <FiShare2 className="m-auto"/>
                </button>
            </div>
            <div className="relative h-full w-auto">              
            <div className="_image_container h-full m-0 p-0" style={style}>
                <img className=" h-full object-cover p-0 m-0 overflow-hidden" src={article.image} alt="article" onClick={ () => openBrowser(article.link)} style={style}/>
            </div>
            
            <div className="_date absolute ml-1 bottom-0 left-0 text-left text-white">{article.date}</div>
            <div className="_image_credit absolute mr-1 text-right text-white">{article.image_credit}</div>
          </div>
      </div>
  );

}
