/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import './styles.scss';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="app-wrapper">
      <Helmet titleTemplate="It code" defaultTitle="It code">
        <meta name="description" content="It code application" />
      </Helmet>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
