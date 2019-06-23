import React, { Component } from "react";

import { RouteComponentProps } from "@reach/router";
import { FormComponentProps } from "antd/lib/form";
import { Button, Form } from "antd";
import SelectMember from "../SelectMember";

interface Props extends FormComponentProps, RouteComponentProps {}

interface State {
  memberId: number;
}

class AddPayment extends Component<Props, State> {
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  handleOnChange = (memberId: number) => {
    this.setState({ memberId });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 2, offset: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 8 }
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
        },
        md: {
          span: 8,
          offset: 8
        }
      }
    };

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <SelectMember
            getFieldDecorator={getFieldDecorator}
            onChange={this.handleOnChange}
          />
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Realizar pago
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create<Props>()(AddPayment);
