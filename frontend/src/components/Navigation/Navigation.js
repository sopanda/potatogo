import React, { memo } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, CODES } from 'constants/languages';
import { useNewLanguage } from 'hooks/changeLang';
import { useToggle } from 'hooks/toggle';
import { NavigationWrapper } from 'components/Wrappers/NavigationWrapper';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { Sidebar } from 'components/Sidebar';
import { logout } from 'store/Login/actions';

const Navigation = () => {
  const [isOpen, toggle] = useToggle();
  const { t: translate } = useTranslation();
  const changeLanguage = useNewLanguage();
  const black = useSelector(state => state.dark);
  const { isLoggedIn } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const logoutItem = isLoggedIn && (
    <NavLink
      tag={Link}
      to='/'
      onClick={() => {
        dispatch(logout());
      }}
    >
      {translate('logout')}
    </NavLink>
  );

  return (
    <NavigationWrapper black={black}>
      <Navbar expand='md' dark>
        <NavbarBrand tag={Link} to={'/'} className='BrandLogo'>
          Potato<span>G</span>o
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {isLoggedIn && (
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to='/dashboard'
                  activeClassName='active'
                  onClick={isOpen ? toggle : null}
                >
                  {translate('dashboard')}
                </NavLink>
              </NavItem>
            )}
            <UncontrolledDropdown
              nav
              inNavbar
              data-cy='Dropdown'
              className='LanguageDropdown'
            >
              <DropdownToggle nav caret data-cy='CurrentLang'>
                {translate('lang')}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  onClick={() => {
                    changeLanguage(CODES.PL);
                    isOpen && toggle();
                  }}
                >
                  {LANGUAGES.PL}
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    changeLanguage(CODES.EN);
                    isOpen && toggle();
                  }}
                  data-cy='SwitchToEnglish'
                >
                  {LANGUAGES.EN}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <ThemeSwitcher toggle={isOpen && toggle} />
            </NavItem>
            <NavItem>{logoutItem}</NavItem>
          </Nav>
          <Sidebar nav toggle={toggle} />
        </Collapse>
      </Navbar>
    </NavigationWrapper>
  );
};

export default memo(Navigation);
