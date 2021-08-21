import styled from '@emotion/styled';
import { Avatar } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ChooseLanguage from './ChooseLanguage';

const NavAvatar = styled(Avatar)`
  background-color: #993366;
`;

const SpacedText = styled.span<{ distance: number }>((props) => ({
  letterSpacing: `${props.distance}px`,
}));

const Nav: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavAvatar>{t('MP')}</NavAvatar>
          </li>
          <li className="nav-item mx-1">
            <Link to="/" className="nav-link text-light font-weight-bold h5 m-0">
              <SpacedText distance={2}>{t('portfolio').toUpperCase()}</SpacedText>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <Link to="/projects" className="nav-link font-weight-bold">
              {t('Projects')}
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/snippets" className="nav-link font-weight-bold">
              {t('Snippets')}
            </Link>
          </li>
          <li className="nav-item mx-2 text-light">
            <ChooseLanguage />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
