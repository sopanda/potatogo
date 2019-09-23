import styled from 'styled-components';
import { theme } from 'themes';

export const Switch = styled.div`
  line-height: 9px;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  & input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  & label {
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: ${() => theme.light.bgContent};
    display: block;
    border-radius: 15px;
    position: relative;
  }

  & label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 5px;
    width: 15px;
    height: 14px;
    background: #fff;
    border-radius: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  & input:checked + label {
    background: ${() => theme.black.bgContent};
  }

  & input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  & label:active:after {
    width: 30px;
  }
`;
