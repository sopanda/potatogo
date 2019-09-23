import { Popup as LPopup } from 'react-leaflet';
import styled from 'styled-components';
import { theme } from 'themes';

export const Popup = styled(LPopup)`
  max-width: 240px;
  border-radius: 0;

  & .leaflet-popup-content-wrapper,
  & .leaflet-popup-tip {
    background: ${theme.light.bg};
    color: ${() => theme.colors.white};
  }

  & .leaflet-popup-close-button {
    color: ${() => `${theme.colors.white}`};
  }

  & .leaflet-popup-content {
    margin: 8px;
  }
`;

export const PopupList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style-type: none;
`;

export const PopupListItem = styled.li`
  line-height: 1.8;
`;

export const PopupListButton = styled.li`
  text-align: center;
  margin-top: 5px;
`;
