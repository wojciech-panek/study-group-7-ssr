import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import { LanguageSelector } from '../languageSelector.component';
import { appLocales } from '../../../../i18n';


describe('LanguageSelector: Component', () => {
  const defaultProps = {
    language: 'en',
    setLanguage: () => {},
    location: { pathname: 'some-pathname' },
    history: { push: () => {} },
  };

  const component = (props) => (
    <LanguageSelector {...defaultProps} {...props} />
  );

  it('should render LanguageSelector root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.language-selector')).to.have.length(1);
  });

  it('should pass props to <select />', () => {
    const wrapper = shallow(component({}));
    const languageSelectorProps = wrapper.find('.language-selector').props();

    expect(languageSelectorProps.value).to.equal(defaultProps.language);
    expect(languageSelectorProps.onChange).to.equal(wrapper.instance().handleLanguageChange);

    languageSelectorProps.onChange({ target: { value: 'de' } });
  });

  it('should render proper number of <option />', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.language-selector').find('option')).to.have.length(appLocales.length);
  });

  it('should pass value prop to <option />', () => {
    const wrapper = shallow(component({}));

    appLocales.forEach((locale, index) => {
      expect(wrapper.find('.language-selector').find('option').at(index).prop('value')).to.equal(locale);
    });
  });

  it('should render proper text inside <option />', () => {
    const wrapper = shallow(component({}));

    appLocales.forEach((locale, index) => {
      expect(wrapper.find('.language-selector').find('option').at(index).render().text()).to.equal(locale);
    });
  });

  it('should pass props to <select />', () => {
    const wrapper = shallow(component({}));
    const languageSelectorProps = wrapper.find('.language-selector').props();

    expect(languageSelectorProps.value).to.equal(defaultProps.language);
    expect(languageSelectorProps.onChange).to.equal(wrapper.instance().handleLanguageChange);

    languageSelectorProps.onChange({ target: { value: 'de' } });
  });

  it('should dispatch setLanguage action', () => {
    const setLanguage = spy();
    const wrapper = shallow(component({ setLanguage }));
    const languageSelectorOnChange = wrapper.find('.language-selector').prop('onChange');

    languageSelectorOnChange({ target: { value: 'de' } });
    expect(setLanguage.firstCall.args[0]).to.equal('de');
  });

  it('should redirect to proper url ', () => {
    const history = { push: spy() };
    const wrapper = shallow(component({
      history,
      location: { pathname: '/en/some-location' },
      language: 'en',
    }));
    const languageSelectorOnChange = wrapper.find('.language-selector').prop('onChange');

    languageSelectorOnChange({ target: { value: 'de' } });
    expect(history.push.firstCall.args[0]).to.equal('/de/some-location');
  });
});
