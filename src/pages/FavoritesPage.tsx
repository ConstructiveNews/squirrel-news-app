import React, { FC, useEffect, useState  } from 'react';
import { LANGUAGES } from '../models';
import { IssueTeaser } from '../widgets/IssueTeaser'
import { getArchive} from '../api/firebase';






export const FavoritesPage: FC = () => {
    
    const [issues, setIssues] = useState<(any)> ( {data : [{ 
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
}] });
  
     useEffect(() => {
        getArchive( LANGUAGES.EN, null, 10, (data) => {
            setIssues({data});
        });
      }, []);
    
      
    
    return(
        <div>
        
        { issues.data.map((item: any, idx: any) =>
          <IssueTeaser key={idx}  date={item.title} headline={item.headline} image={item.image} link={item.issueURL} issueNum={idx}/>
        )}

        
        
        </div>
    )
}