import React, { Component } from "react";
import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "@reach/router";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input, Select } from "antd";
import SelectMember from "../SelectMember";
import MemberService from "../Members/MemberService";
import AccountModel from "../Accounts/AccountModel";
import openNotificationWithIcon from "../../Utils";

interface Props extends FormComponentProps, RouteComponentProps {}

interface State {
  accounts: AccountModel[];
  memberId: number;
  accountId: number;
  amount: number;
}

class AddTransaction extends Component<Props, State> {
  state: State = {
    accounts: [],
    memberId: 1,
    accountId: 1,
    amount: 200
  };

  private memberService = new MemberService();

  async componentDidMount() {
    const { memberId } = this.state;
    const accounts = await this.memberService.accountsByMemberId(memberId);

    this.setState({ accounts });
  }

  handleOnChange = async (memberId: number) => {
    this.setState({ memberId });
    const accounts = await this.memberService.accountsByMemberId(memberId);

    this.setState({ accounts });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  handleChange = (accountId: number) => {};

  amountOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: parseInt(event.target.value, 10) });
  };

  render() {
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



      const {getFieldDecorator} = this.props.form;
      const {Option} = Select;
      const {accounts, accountId, amount} = this.state;
    
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <Title level={3}>Crear un nuevo abono</Title>
          </div>
          <SelectMember
            getFieldDecorator={getFieldDecorator}
            onChange={this.handleOnChange}
          />
          <Form.Item label={<span>Empleado</span>}>
            {getFieldDecorator("account", {
              initialValue: accountId,
              rules: [
                {
                  required: true,
                  message: "Cuenta es requerida"
                }
              ]
            })(
              <Select style={{ width: 120 }} onChange={this.handleChange}>
                {accounts.map(account => (
                  <Option
                    value={account.id}
                    key={account.id}
                  >{`${account.id} - ${account.accountType}`}</Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label={<span>Empleado</span>}>
            {getFieldDecorator("amount", {
              initialValue: amount,
              rules: [
                {
                  required: true,
                  message: "Cantidad es requerida"
                }
              ]
            })(<Input onChange={this.amountOnChange} />)}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Abonar
              </Button>
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create<Props>()(AddTransaction);
