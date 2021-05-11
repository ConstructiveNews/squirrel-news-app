import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import { NavBar } from '../components/NavBar/NavBar';
import { Scrollview } from '../components/Scrollview/Scrollview'
import { AboutUsPage, DonationPage, ArchivePage, FavoritesPage, ImprintPage, PrivacyPolicyPage } from '../pages/index';
// const intervals = 2; 

export const BaseLayout: FC = () => {

  return (
    <div>
      <Router>        
      {/* render toolbar and Burger Menu here */}
        <NavBar />    
        <Switch>
          
          {/* Home page redirects to latest issue */}
          <Route exact path="/">
            <Redirect to="issue/0" />
          </Route>
          
          {/* Article page redirects to issue where id == issue index in sorted list */}
          <Route path="/issue/:id" component={Scrollview}/>

          {/* Archive page */}
          <Route exact path="/archive">
            <ArchivePage/>
          </Route>
          
          {/* Donate Page with static props*/}
          <Route exact path="/donate">
            <DonationPage />
          </Route>
        
          <Route exact path="/favorites">
            <FavoritesPage/>
          </Route>

          <Route exact path="/about">
            <AboutUsPage/>
          </Route>

          <Route exact path="/imprint">
            <ImprintPage/>
          </Route>

          <Route exact path="/privacy">
            <PrivacyPolicyPage/>
          </Route>

        </Switch>
      
      </Router>
      
    
      </div>
  )
}