import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { ArticleTeaser } from '../../pages/ArticleTeaser'
import { getIssue } from '../../api/firebase';
import { Article, LANGUAGES, } from '../../models';
import { DonationPage } from '../../pages/DonationPage'
import { RouteComponentProps } from 'react-router-dom';
//import { IssuesPage } from '../../pages';
import { IssueCoverPage } from '../../pages/IssueCoverPage';


// calculate window height based on the screen size, subtract the height of the nav bar (3 rem)
// This places the scroll bar at the bottom of the page
const windowHeight = window.screen.height - convertRemToPixels(5);

const style: CSSProperties = {
  height: windowHeight + 'px'
}

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

interface Props extends RouteComponentProps<{ id: string }> { }

export const Scrollview: FC<Props> = ({ match }) => {

  const [paginator, refreshPaginator] = useState<any>();
  const [issue, setIssue] = useState<
    {
      donate: { title: string, text: string, url: string },
      date: string,
      articles: Article[],
      headline: string,
      image: string,
      imageCredit: string,
    }>
    ({
      donate: { title: "", text: "", url: "" },
      date: "",
      articles: [],
      headline: "",
      image: "",
      imageCredit: "",
    });

  const [currentPage, updatePage] = useState(0);


  var ref = React.createRef<HTMLDivElement>();
  var div: any = null;
  var numPages = 0;

  // eslint-disable-next-line
  function setPaginator(currentPage: number) {

    numPages = getNumberOfPages();
    let bullets: any = []

    if (issue.headline !== undefined) {
      if (issue.headline.length > 0) {
        numPages += 1;
      }
    }

    if (issue.donate.title !== undefined) {
      if (issue.donate.title.length > 0) {
        numPages += 1;
      }
    }
    for (let i = 0; i < numPages - 1; i++) {
      if (i === currentPage) {
        bullets.push(<div key={i * 100} className="_page_indicator_container h-2 w-2 my-auto mx-1 rounded-full bg-gray-900"></div>)
      }
      else {
        bullets.push(<div key={i} className="_page_indicator_container h-2 w-2 my-auto mx-1 rounded-full bg-gray-400"></div>)
      }
    }

    refreshPaginator(bullets)
  }

  useEffect(() => {
    setPaginator(currentPage);
    // eslint-disable-next-line
  }, [currentPage, issue])

  useEffect(() => {
    getIssue(Number(match.params.id + 1), LANGUAGES.EN, (data) => {
      setIssue(
        {
          donate: { title: data.donationTitle, text: data.donationText, url: data.donationUrl },
          date: data.title,
          articles: data.articles,
          headline: data.headline,
          image: data.image,
          imageCredit: data.imageCredit,
        });
      setScrollStart();
      setDonatePage();
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    div = ref.current;
    if (div) {
      div.addEventListener('scroll', getScrollPosition, true);
    }
  }, []);

  function getCurrentPage() {
    return (div.scrollLeft / window.screen.width);
  }

  // called every frame to get scroll position
  function getScrollPosition() {
    // this will filter out non-number inputs
    if (div !== null && div.scrollLeft >= 0) {
      if (div.scrollLeft % window.screen.width === 0) {
        updatePage(getCurrentPage());
      }
    }
  }

  function setScrollStart() {
    if (div !== null) {
      div.scrollLeft = 0;
    }
  }

  // This function ensures that the Donate page will not load until 
  // after the content loads. We could replace the else and instantiation 
  // statement with some sort of loading animation
  var loadingDiv = <div></div>;
  // var donate: any = loadingDiv;
  function setDonatePage() {
    if (div !== null) {

      // donate = <DonationPage info={{
      //   id: 1000,
      //   headline: issue.donate.title,
      //   body: issue.donate.text
      // }} />

      return true;
    }
    else {
      // donate = <div></div>
      return false;
    }
  }

  function getNumberOfPages() {
    let pages: number = 0;

    if (div !== loadingDiv) {
      pages += 1;
    }
    pages += issue.articles.length
    return pages
  }



  return (
    <div className="flex flex-col">

      <div ref={ref} className="flex flex-row overflow-x-scroll overflow-y-hidden hide-scrollbars w-auto h-full scroll-snap" style={style}>

        <IssueCoverPage date={issue.date} headline={issue.headline} image={issue.image} imageCredit={issue.imageCredit} />

        {issue.articles.map((item, idx) =>
          <ArticleTeaser key={idx} article={{
            id: item.position,
            date: issue.date,
            image: item.imageUrl,
            image_credit: item.credit,
            link: item.url,
            headline: item.title,
            provider: item.source,
            description: item.teaser
          }} />
        )}

        <DonationPage info={{
          id: 1000,
          headline: issue.donate.title,
          body: issue.donate.text
        }} />


      </div>

      {/* Paginator */}

      {/*!  important ! if you adjust the height of the _paginator div, you must also adjust 
      the value in the convertRemToPixels method call on line 10. 
      Refer to the tailwind documentation ( https://tailwindcss.com/docs/height ) 
      for the tailwind h-value to rem conversions. -st 30/11/2020    
*/}
      <div className="_paginator flex flex-row w-full h-8 ">
        <div className="_paginator_atomic_container flex flex-row h-8 w-auto my-auto mx-auto ">
          {paginator}
        </div>
      </div>

    </div>
  );
}