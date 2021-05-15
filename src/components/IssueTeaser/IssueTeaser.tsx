import React, { FC } from 'react';
import { Link } from 'react-router-dom';


interface Props{
    image: string;
    headline: string;
    date : string;
    link : string;
    issueNum: number;
}



export const IssueTeaser: FC<Props> = ({image, headline, date, link, issueNum}) => {
    
    // const [issue, setIssue] = useState<{ donate: { title: string, text: string, url: string }, date: string, articles: Article[] }>({ donate: { title: "", text: "", url: "" }, date: "", articles: [] });

    return(

        <div>
            <Link to={`/issue/${issueNum}`}>
                <div className=" w-full h-24 flex flex-row my-2 shadow ">
                    <img src={image} alt={headline} className=" w-40 h-full overflow-hidden"></img>
                    <div className="_Issue_text_container w-full h-full flex flex-col-reverse">
                        <div className="_Date h-auto w-full text-right text-gray-500 px-1 ">{date}</div>
                        <div className="_Headline w-full h-full leading-tight text-left px-1 text-base pt-5 ">{headline}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}