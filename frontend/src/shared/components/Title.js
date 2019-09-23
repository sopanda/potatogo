import styled from 'styled-components';
import { theme } from 'themes';
import { MIN_WIDTH_768 } from 'constants/width';

export const Title = styled.span`
  display: block;
  color: ${() => theme.colors.white};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding-bottom: 16px;

  @media (${MIN_WIDTH_768}) {
    text-align: left;
    font-size: 22px;
  }
`;
