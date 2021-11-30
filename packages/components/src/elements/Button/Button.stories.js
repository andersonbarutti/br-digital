import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import {
  StoryLayout,
  StoryHeader,
  StorySection,
  StoryCol,
  StoryBox,
} from '../../layouts'

// prettier-ignore
const codeSample = 
`import { Button } from '@project/components

<Button style={{ width: 90 }}>Click me</Button> // width default is 100%
<Button style={{ width: 200 }}>Click me</Button>
`

storiesOf('Elements', module).add('Button', () => (
  <StoryLayout>
    <StoryHeader title='Button'>Trigger something.</StoryHeader>
    <StorySection title='Examples' flex>
      <StoryCol>
        <StoryBox code={codeSample}>
          <Button style={{ width: 90 }}>Click me</Button>
          <br />
          <Button style={{ width: 200 }}>Click me</Button>
        </StoryBox>
      </StoryCol>
      <StoryCol />
    </StorySection>
  </StoryLayout>
))
