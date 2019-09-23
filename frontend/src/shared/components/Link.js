import styled from 'styled-components';
import { theme } from 'themes';
import { Link as RRLink } from 'react-router-dom';

export const Link = styled(RRLink)`
  letter-spacing: 0.094em;
  color: ${() => theme.colors.green};
  transition: 0.2s;
  font-size: 13px;
`;
