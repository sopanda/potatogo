import React from 'react';
import { default as Load } from 'react-loader-spinner';
import { LoaderWrapper } from 'components/Wrappers/LoaderWrapper';
import { theme } from 'themes';

export const Loader = () => (
  <LoaderWrapper>
    <Load
      type='Triangle'
      color={theme.common.spinner}
      height={100}
      width={100}
    />
  </LoaderWrapper>
);
