export interface Issue {
  issueId: string;
  headline: string;
  teaser: string;
  image: string;
  imageCredit: string;
  language: LANGUAGES;
  publishedAt: Date;
  title: string;
  issueURL: string;
  showDonation: boolean;
  donationTitle: string;
  donationText: string;
  donationUrl: string;
  articles: Article[];
}


export interface Article {
  articleId: string;
  position: number;
  title: string;
  teaser: string;
  source: string;
  url: string;
  imageUrl: string;
  credit: string;
  category?: string;
  issue: string;
  published: boolean;
  language: string;
  dateCreated: any;
  expanded?: boolean;
}


export interface Donate {
  title: string;
  text: string;
  case?: string;
  url: string;
}


/**
 * Used to store information on device via issueId and articleId
 */
export interface StoredFav {
  issueId: string;
  articleId: string;
}


export enum LANGUAGES {
  DE = 'de',
  EN = 'en'
}