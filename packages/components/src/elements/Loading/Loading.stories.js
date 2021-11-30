import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from '.'
import {
  StoryLayout,
  StoryHeader,
  StorySection,
  StoryCol,
  StoryBox,
} from '../../layouts'

// prettier-ignore
const codeSample = 
`<Loading />
`

storiesOf('Elements', module).add('Loading', () => (
  <StoryLayout>
    <StoryHeader title='Loading'>Visual load.</StoryHeader>
    <StorySection title='Examples' flex>
      <StoryCol>
        <StoryBox code={codeSample}>
          <Loading />
        </StoryBox>
      </StoryCol>
    </StorySection>
  </StoryLayout>
))
