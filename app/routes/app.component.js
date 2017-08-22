import React, { PropTypes, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { get } from 'lodash';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green500, green700, amber800 } from 'material-ui/styles/colors';

import { translationMessages, appLocales } from '../i18n';
import { DEFAULT_LOCALE } from '../modules/locales/locales.redux';


export class AppComponent extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node,
    setLanguage: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    userAgent: PropTypes.string.isRequired,
  };

  componentWillMount() {
    const language = get(this.props.match, 'params.lang', DEFAULT_LOCALE);
    if (!appLocales.includes(language)) {
      this.props.history.push('/404');
    }

    this.props.setLanguage(language);
  }

  get muiTheme() {
    return getMuiTheme({
      palette: {
        primary1Color: green500,
        primary2Color: green700,
        accent1Color: amber800,
        pickerHeaderColor: green500,
      },
      userAgent: this.props.userAgent,
    });
  }

  render() {
    const language = this.props.language || DEFAULT_LOCALE;
    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - React-Redux Exercise"
          defaultTitle="React-Redux Exercise"
        />
        <IntlProvider
          locale={language}
          messages={translationMessages[language]}
        >
          <MuiThemeProvider muiTheme={this.muiTheme}>
            <div className="app__content">
              <AppBar
                title="with SSR"
                showMenuIconButton={false}
              />
              {React.Children.only(this.props.children)}
            </div>
          </MuiThemeProvider>
        </IntlProvider>
      </div>
    );
  }
}

export const App = withRouter(AppComponent);
