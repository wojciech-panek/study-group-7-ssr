import React, { PropTypes, PureComponent } from 'react';

import { appLocales } from '../../../i18n';


export class LanguageSelector extends PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  handleLanguageChange = ({ target: { value } }) => {
    this.props.setLanguage(value);

    let targetUrl = this.props.location.pathname.replace(`/${this.props.language}`, `/${value}`);
    this.props.history.push(targetUrl);
  };

  render() {
    return (
      <select className="language-selector" value={this.props.language} onChange={this.handleLanguageChange}>
        {appLocales.map((locale, index) => (
          <option key={index} value={locale}>{locale}</option>
        ))}
      </select>
    );
  }
}
