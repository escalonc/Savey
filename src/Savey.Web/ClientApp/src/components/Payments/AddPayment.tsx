import React, { Component } from "react";

import { RouteComponentProps } from "@reach/router";
import { FormComponentProps } from "antd/lib/form";
import { Button, Form } from "antd";
import SelectMember from "../SelectMember";
import Title from "antd/lib/typography/Title";
import PaymentService from "./PaymentService";
import openNotificationWithIcon from "../../Utils";

interface Props extends FormComponentProps, RouteComponentProps {}

interface State {
  memberId: number;
}

class AddPayment extends Component<Props, State> {
  private paymentService = new PaymentService();
  
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    const { memberId } = this.state;
    try {


      await this.paymentService.create(memberId);
      openNotificationWithIcon();

    
    }
    catch (e) {
      
    }
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
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={3}>Crear pago</Title>
        </div>
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
