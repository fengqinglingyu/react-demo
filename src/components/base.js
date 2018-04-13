import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Form, Input, Radio, Button } from 'antd'

const FormItem = Form.Item

class Base extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formLayout: 'horizontal',
      item: props.item
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ item: props.item })
  }
  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value })
  }
  handleChange = (prop, e) => {
    // 这样写是没有什么问题的，但是不推荐直接修改state，虽然这些数据不用于渲染
    // this.state.item[prop] = e.target.value
    this.setState({
      item: { ...this.state.item, [prop]: e.target.value }
    })
  }
  viewObject = () => {
    console.log(this.state.item)
    console.log(this.props.item)
  }

  render() {
    const item = this.state.item
    const { formLayout } = this.state
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 }
          }
        : null
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem colon={false} label="Form Layout" {...formItemLayout}>
            <Radio.Group
              defaultValue="horizontal"
              onChange={this.handleFormLayoutChange}
            >
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
            </Radio.Group>
            <Button onClick={this.props.getData}>Get Data</Button>
            <Button onClick={this.viewObject}>View Object</Button>
          </FormItem>
          <Row gutter={10}>
            <Col span={16}>
              <FormItem colon={false} label="Company Name" {...formItemLayout}>
                <Input
                  value={item.cn}
                  placeholder="input placeholder"
                  onChange={e => this.handleChange('cn', e)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="Status" {...formItemLayout}>
                <Input
                  value={item.s}
                  placeholder="input placeholder"
                  onChange={e => this.handleChange('s', e)}
                />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8}>
              <FormItem colon={false} label="WTL Team" {...formItemLayout}>
                <Input
                  value={item.wt}
                  placeholder="input placeholder"
                  onChange={e => this.handleChange('wt', e)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="WTL Email" {...formItemLayout}>
                <Input
                  value={item.we}
                  placeholder="input placeholder"
                  onChange={e => this.handleChange('we', e)}
                />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="DK Code" {...formItemLayout}>
                <Input
                  value={item.dk}
                  placeholder="input placeholder"
                  onChange={e => this.handleChange('dk', e)}
                />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col>
              <FormItem colon={false} label="Address" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8}>
              <FormItem colon={false} label="Post Code" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="State Code" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="City Code" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={8}>
              <FormItem colon={false} label="Country Code" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem colon={false} label="Web Site" {...formItemLayout}>
                <Input placeholder="input placeholder" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <FormItem colon={false} label="Contact Person" {...formItemLayout}>
              <Card type="inner">
                <Row gutter={10}>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="Phone"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="Fax"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="Email"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="Title"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="Given Name"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem
                      colon={false}
                      label="SurName"
                      {...formItemLayout}
                      style={{ marginBottom: '24px' }}
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                  </Col>
                </Row>
              </Card>
            </FormItem>
          </Row>
        </Form>
      </div>
    )
  }
}

Base.propTypes = {
  item: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired
}

export default Base
