import React, { PureComponent, PropTypes } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { DEFAULT_LOCALE } from '../modules/locales/locales.redux';

import App from './app.container';
import Home from './home';
import NotFound from './notFound';

export class RootContainer extends PureComponent {
  static propTypes = {
    userAgent: PropTypes.string.isRequired,
  };

  render() {
    const { userAgent } = this.props;

    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={DEFAULT_LOCALE} />} />


        <Route exact path="/404" component={NotFound} />

        <Route path="/:lang">
          <App userAgent={userAgent}>
            <Switch>
              <Route exact path="/:lang" component={Home} />

              <Route component={NotFound} />
            </Switch>
          </App>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(RootContainer);
