import firebase from 'firebase';
import config from '../config/firebaseconf.json';

import { Issue, Article, LANGUAGES } from '../models/index'

firebase.initializeApp(config);

export const firestore = firebase.firestore()


/**
 * receives the latest issue from Firestore sorted by publishedAt field and by given language
**/
export function getIssue(atIndex: number, language: LANGUAGES, onResult: (data: Issue) => void) {

  if (atIndex < 1) {
    throw new Error("invalid input, the minimum value is 1")
  }

  firestore.collection('issues')
    .where('language', '==', language)
    .orderBy('publishedAt', 'desc').limit(atIndex).onSnapshot(
      (issue) => {
        const result: Issue = issue.docChanges()[issue.docChanges().length - 1].doc.data() as Issue;
        result.issueId = issue.docChanges()[issue.docChanges().length - 1].doc.id;
        
        firestore.collection('issues').doc(result.issueId).collection('articles').onSnapshot(articles => {
          result.articles = articles.docChanges().map(article => ({ ...article.doc.data(), articleId: article.doc.id  }) as Article);
          onResult(result);
        })
      }
    )
}


/**
  * returns a list of issues as an archive 
**/
export function getArchive(language: LANGUAGES, lastChunk: Partial<Issue> | null, limit: number, onResult: ((data: Partial<Issue[]>, lastChunk: any) => void)) {

  if (lastChunk) {
    firestore.collection('issues')
      .where('language', '==', language)
      .orderBy('publishedAt', 'desc').startAfter(lastChunk).limit(limit).onSnapshot(issues => {
        onResult(
          issues.docChanges().map(issue => issue.doc.data() as Issue),
          null,
        )
      });
  } else {
    firestore.collection('issues')
      .where('language', '==', language)
      .orderBy('publishedAt', 'desc').limit(limit).onSnapshot(issues => {
        onResult(
          issues.docChanges().map(issue => issue.doc.data() as Issue),
          issues.docChanges()[issues.docChanges().length - 1],
        )
      });
  }

}


/**
 * Returns the first result for an issue and an article Document Id
 * @param issueId : Document id of issue to lookup
 * @param articleId: Document id of article to lookup
 * @param onResult : callback handler
 */
export function getArticle(issueId: string, articleId: string, onResult: (favs: Article) => void) {
  
  firestore.collection('issues').doc(issueId).collection('articles').onSnapshot((articles) => {
    console.log('articles', articles)
    onResult(
      articles.docChanges().filter( article => article.doc.id === articleId ).map( article => article.doc.data() as Article)[0] );
  });
}