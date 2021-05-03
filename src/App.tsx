import React, { FC } from 'react';
import { getIssue } from './api/firebase';
import { BaseLayout } from './layouts/BaseLayout';
import { LANGUAGES } from './models';
import { addFav, removeFav} from './api/favorites';

  
export const App: FC<{}> = () => {

  // const [articles, setArticles] =  useState <any>();
  
  // getArticle("HVG0cAArZe6bMj4QJPag", "bvMDfEYH7xZ3iRv5YsXr", (result) => {
  //   console.log('fav', result);
  // });

  getIssue(1, LANGUAGES.DE, (data) => {
    // console.log('get issue', data.issueId)
    
    addFav(data.issueId, data.articles[0].articleId, () => { console.log('added')});
    removeFav(data.issueId, data.articles[0].articleId, () => { console.log('removed')})
  })
  
  // getFavorites().then( (data) => console.log('favs', data))
  
  return (
    <div>
      {/* <FAB></FAB> */}
      <BaseLayout />
    </div>  
  );
}

export default App;
