import React, { FC, useContext, useEffect, useState  } from 'react';
import { LANGUAGES } from '../models';
import { IssueTeaser } from '../components/IssueTeaser/IssueTeaser'
import { getArchive} from '../api/firebase';
import { valFor } from '../api/language';
import { AppContext } from '../contexts';


export const ArchivePage: FC = () => {

  const ctx = useContext(AppContext);
  
  const [issues, setIssues] = useState<(any)> ( 
    {data : [{ 
      image: "", 
      headline: "", 
      title: "", 
      teaser: "", 
      imageCredit: "",
      language: LANGUAGES.EN,
      publishedAt: new Date(),
      issueURL: "",
      showDonation: false,
      donationTitle: "",
      donationText: "",
      donationUrl: "",
      articles: []
    }] 
  });
  
  useEffect(() => {

    getArchive( LANGUAGES.EN, null, 10, (data) => {
      setIssues({data});
    });
  }, []);
        
  return(
    <div className="flex flex-col h-full w-screen">
      <div className="pt-16 px-2">
        <h1 className="text-2xl">{valFor(ctx.language, 'archive.title')}</h1>
        {issues.data.map((item: any, idx: any) =>
          <IssueTeaser 
          key={idx}  
          date={item.title} 
          headline={item.headline} 
          image={item.image} 
          link={item.issueURL}           
          issueNum={idx}/>
          )}
        </div>
    
    </div>
  )
}