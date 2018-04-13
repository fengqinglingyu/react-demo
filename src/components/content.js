import React from 'react'
import { Card, Button, Icon } from 'antd'
import Company from './company'

const Content = () => {
  return (
    <Card
      title="Company Info"
      extra={
        <Button.Group>
          <Button value="large">
            <Icon type="retweet" />Refresh
          </Button>
          <Button value="default">
            <Icon type="save" />Save
          </Button>
        </Button.Group>
      }
    >
      <Company />
    </Card>
  )
}

export default Content
