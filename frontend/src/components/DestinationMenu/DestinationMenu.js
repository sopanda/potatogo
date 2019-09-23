import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeType } from 'store/ContextMenuType/actions';
import { DestinationMenuWrapper } from 'components/Wrappers/DestinationMenuWrapper';
import classNames from 'classnames';

export const DestinationMenu = ({ map }) => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const black = useSelector(state => state.dark);
  const [active, setActive] = useState();

  const handleClick = type => {
    dispatch(changeType(type));
    setActive(type);
  };

  return (
    <DestinationMenuWrapper black={black}>
      <ul className='menu-options'>
        <li
          className={classNames(
            'menu-option',
            active === 'start' ? 'active' : ''
          )}
          onClick={() => handleClick('start')}
        >
          {translate('dashboard.new.offer.set.start')}
        </li>
        <li
          className={classNames(
            'menu-option',
            active === 'finish' ? 'active' : ''
          )}
          onClick={() => handleClick('finish')}
        >
          {translate('dashboard.new.offer.set.finish')}
        </li>
      </ul>
    </DestinationMenuWrapper>
  );
};
