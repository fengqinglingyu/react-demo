import momnet from 'moment'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Row, Col, Form, Input, Radio, Button, DatePicker } from 'antd'

const FormItem = Form.Item
class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formLayout: 'horizontal',
      cardItems: props.cardItems
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ cardItems: props.cardItems })
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value })
  }

  input(idx, prop, e) {
    let arr = [...this.state.cardItems]
    let obj = arr[idx]
    obj[prop] = e.target.value
    this.setState({ cardItems: arr })
  }

  select = e => {
    console.log(e)
  }

  // 这样写this是undefined
  // viewData() {
  //   console.log(this.state.cardItems)
  // }

  viewData = () => {
    console.log(this.state.cardItems)
  }

  render() {
    const arr = this.state.cardItems
    const formLayout = this.state.formLayout
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 }
          }
        : null
    let listItem = []
    for (let i = 0, len = arr.length; i < len; i++) {
      let key = arr[i].key
      listItem.push(
        <div key={key}>
          <Row gutter={10}>
            <Col span={8}>
              <FormItem label="Card Type" {...formItemLayout}>
                <Input
                  value={arr[i].ct}
                  onChange={e => this.input(i, 'ct', e)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Card Num" {...formItemLayout}>
                <Input
                  value={arr[i].cn}
                  onChange={e => this.input(i, 'cn', e)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem label="Payment Usage" {...formItemLayout}>
                <Input
                  value={arr[i].pu}
                  onChange={e => this.input(i, 'pu', e)}
                />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8}>
              <FormItem label="Effective On" {...formItemLayout}>
                <DatePicker
                  style={{ width: '100%' }}
                  defaultValue={momnet(key)}
                  onSelect={date => this.select(date)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <Button onClick={() => this.props.del(i)}>Del</Button>
            </Col>
          </Row>
        </div>
      )
    }
    return (
      <div>
        <Radio.Group
          defaultValue="horizontal"
          onChange={this.handleFormLayoutChange}
        >
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
        </Radio.Group>
        <Button onClick={this.props.add}>Add</Button>
        <Button onClick={this.viewData}>View Data</Button>
        <Form layout={formLayout}>{listItem}</Form>
      </div>
    )
  }
}

CreditCard.propTypes = {
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  cardItems: PropTypes.array.isRequired
}

export default CreditCard
