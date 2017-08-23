import { expect } from 'chai';
import { spy } from 'sinon';

import { LocalesActions } from '../../../modules/locales/locales.redux';


describe('Home: Container', () => {
  describe('mapDispatchToProps', () => {
    it('should call LocalesActions.setLanguage', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).setLanguage();

      expect(dispatch.firstCall.args[0]).to.deep.equal(LocalesActions.setLanguage());
    });
    it('should call MaintainersActions.fetch', () => {
      const dispatch = spy();

      mapDispatchToProps(dispatch).fetchMaintainers();

      expect(dispatch.firstCall.args[0]).to.deep.equal(MaintainersActions.fetch());
    });
  });
});
