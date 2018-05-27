import styled, { css } from 'react-emotion';
import { createElement } from 'react';
import { omit } from 'lodash';

const removeProps = (el, list) => props =>
  createElement(el, omit(props, list));

const imagesStyle = css`
  position absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const ImgPlaceholder = styled(removeProps('img', ['deactivated']))`
  ${imagesStyle};
  opacity: ${props => (props.deactivated ? 0 : 1)};
  z-index: 1;
  transition: opacity .4s ease-in;
`;

export const ImgFinal = styled(removeProps('img', ['fit']))`
  ${imagesStyle};
  object-fit: ${props => props.fit};
  z-index: 0;
`;