import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { spy } from 'sinon';

import { translationMessages } from '../../i18n';
import { DEFAULT_LOCALE } from '../../modules/locales/locales.redux';
import { AppComponent as App } from '../app.component';


describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;
  const defaultProps = {
    language: 'en',
    setLanguage: () => {},
    match: { params: { lang: 'de' } },
    history: { push: () => {} },
  };

  const component = (props) => (
    <App {...defaultProps} {...props}>
      {children}
    </App>
  );

  it('should render <Helmet/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(Helmet)).to.have.length(1);
  });

  it('should pass props to <Helmet/>', () => {
    const wrapper = shallow(component({}));
    const helmetProps = wrapper.find(Helmet).props();

    expect(helmetProps.titleTemplate).to.be.a('string');
    expect(helmetProps.defaultTitle).to.be.a('string');
    expect(helmetProps.meta).to.be.an('array');
  });

  it('should render <IntlProvider/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(IntlProvider)).to.have.length(1);
  });

  it('should pass props to <IntlProvider/>', () => {
    const wrapper = shallow(component({}));
    const intlProps = wrapper.find(IntlProvider).props();

    expect(intlProps.locale).to.equal(defaultProps.language);
    expect(intlProps.messages).to.equal(translationMessages[defaultProps.language]);
  });

  it('should render children inside <IntlProvider/>', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(IntlProvider)).to.contain(children);
  });

  it('should dispatch setLanguage with language router param if it is defined', () => {
    const setLanguage = spy();
    shallow(component({ setLanguage }));

    expect(setLanguage).to.have.been.calledOnce;
    expect(setLanguage).to.have.been.calledWith(defaultProps.match.params.lang);
  });

  it('should dispatch setLanguage with default language if router param is not defined', () => {
    const setLanguage = spy();
    shallow(component({ setLanguage, match: { params: {} } }));

    expect(setLanguage).to.have.been.calledOnce;
    expect(setLanguage).to.have.been.calledWith(DEFAULT_LOCALE);
  });

  it('should redirect to 404 if language is invalid', () => {
    const history = { push: spy() };
    shallow(component({ history, match: { params: { lang: 'invalid-languge' } } }));

    expect(history.push).to.have.been.calledOnce;
    expect(history.push).to.have.been.calledWith('/404');
  });
});
