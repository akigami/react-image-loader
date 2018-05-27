import styled, { css } from 'react-emotion';

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

export const ImgPlaceholder = styled('img')`
  ${imagesStyle};
  opacity: ${props => (props.deactivated ? 0 : 1)};
  z-index: 1;
  transition: opacity .4s ease-in;
`;

export const ImgFinal = styled('img')`
  ${imagesStyle};
  z-index: 0;
`;