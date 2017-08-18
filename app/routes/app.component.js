import React, { PropTypes, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { get } from 'lodash';
import { withRouter } from 'react-router-dom';

import { translationMessages, appLocales } from '../i18n';
import { DEFAULT_LOCALE } from '../modules/locales/locales.redux';


export class AppComponent extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    setLanguage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const language = get(this.props.match, 'params.lang', DEFAULT_LOCALE);
    if (!appLocales.includes(language)) {
      this.props.history.push('/404');
    }

    this.props.setLanguage(language);
  }

  render() {
    const language = this.props.language || DEFAULT_LOCALE;
    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - Apptension React Boilerplate"
          defaultTitle="Apptension React Boilerplate"
          meta={[
            { name: 'description', content: 'Apptension React Boilerplate application' },
          ]}
        />

        <IntlProvider
          locale={language}
          messages={translationMessages[language]}
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </div>
    );
  }
}

export const App = withRouter(AppComponent);
