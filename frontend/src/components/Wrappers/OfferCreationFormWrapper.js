import styled from 'styled-components';
import { theme } from 'themes';
import { MIN_WIDTH_768, MAX_WIDTH_1200 } from 'constants/width';

export const OfferCreationFormWrapper = styled.div`
  padding: 10px 0;
  margin: auto;

  & button {
    max-width: 100%;
    border: 1px solid;
    border-color: ${() => theme.common.buttonBorder};
  }

  @media (${MIN_WIDTH_768}) {
    max-width: 447px;
    width: 80%;
    margin: auto;
  }

  @media (${MAX_WIDTH_1200}) {
    max-width: 447px;
  }
`;
