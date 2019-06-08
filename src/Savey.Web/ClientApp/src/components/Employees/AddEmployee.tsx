
import React, { Component } from "react";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker
} from "antd";
import { FormComponentProps } from "antd/lib/form";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

interface Props extends FormComponentProps {}

class AddEmployee extends Component<Props, {}> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label={<span>Primer Nombre&nbsp;</span>}>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Inserte su Primer Nombre!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Segundo Nombre&nbsp;</span>}>
          {getFieldDecorator("middleName", {
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Primer Apellido&nbsp;</span>}>
          {getFieldDecorator("surname", {
            rules: [
              {
                required: true,
                message: "Please input your surname!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Segundo Apellido&nbsp;</span>}>
          {getFieldDecorator("secondSurname", {
            rules: [
              {
                required: true,
                message: "Please input your second surname!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
            <Form.Item label="Fecha inicio empresa">
                <DatePicker />
                </Form.Item >
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Registro
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<Props>()(AddEmployee);
