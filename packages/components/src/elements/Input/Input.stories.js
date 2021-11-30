import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'
import {
  StoryLayout,
  StoryHeader,
  StorySection,
  StoryCol,
  StoryBox,
} from '../../layouts'

storiesOf('Elements', module).add('Input', () => (
  <StoryLayout>
    <StoryHeader title='Input'>A text field.</StoryHeader>
    <StorySection title='Examples' flex>
      <StoryCol>
        <StoryBox code="<Input placeholder='Input example' />">
          <Input placeholder='Input example' />
        </StoryBox>
      </StoryCol>
    </StorySection>
  </StoryLayout>
))
