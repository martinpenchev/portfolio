import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Nav', () => {
  it('Renders correctly', () => {
    const nav = shallow(<Nav />);
    expect(nav).toMatchSnapshot();
  });
});
