import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'react-emotion';
import Img from '../lib'

const Wrapper = styled('div')`
  width: 400px;
  height: 400px;
`;

storiesOf('Img', module)
  .addDecorator(getStory => (
    <Wrapper>{getStory()}</Wrapper>
  ))
  .add('initial', () => (
    <Img
      alt="lorempixel"
      src="http://lorempixel.com/400/400/animals"
    />
  ))
