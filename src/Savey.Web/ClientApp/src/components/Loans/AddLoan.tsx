import React, { Component } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import LoanService from "./LoanService";
import { FormComponentProps } from "antd/lib/form";
import MemberService from "../Members/MemberService";
import MemberModel from "../Members/MemberModel";
import LoanModel from "./LoanModel";

import { RouteComponentProps } from "@reach/router";
import Title from "antd/lib/typography/Title";

interface State {
  amount: number;
  maxAmount: number;
  period: number;
  isPayed: boolean;
  annualInterest: number;
  loanType: string;
  memberId: number;
  members: MemberModel[];
  formDisabled: boolean;
}

interface Props extends FormComponentProps, RouteComponentProps {}

class AddLoan extends Component<Props, State> {
  private memberService = new MemberService();
  private loanService = new LoanService();

  state: State = {
    amount: 0,
    period: 12,
    isPayed: false,
    annualInterest: 0.1,
    loanType: "TRUST",
    memberId: 1,
    members: [],
    maxAmount: 0,
    formDisabled: false
  };

  async componentDidMount() {
    const members = await this.memberService.all();
    this.setState({ members });
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [event.target.id]: event.target.value });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { annualInterest, amount, memberId, loanType, period } = this.state;

    const loan: LoanModel = {
      annualInterest: annualInterest,
      amount,
      memberId,
      loanType,
      period,
      isPayed: false
    };

    await this.loanService.create(loan);
  };

  filterOptions = (input: string, option: any) => {
    const children = (option.props.children as string) || "";
    return children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  handleMemberChange = async (memberId: number) => {
    const count = await this.memberService.countExistingLoans(memberId);

    this.setState({ formDisabled: !(count > 0) });

    this.setState({ memberId });
  };

  handlePeriodChange = (value: number | undefined) =>
    this.setState({ period: value || 1 });

  handleLoanTypeChange = async (loanType: string) => {
    const { memberId } = this.state;
    this.setState({ loanType }, async () => {
      if (loanType === "AUTO") {
        const maxAmount = await this.memberService.contributionAccountBalance(
          memberId
        );

        this.setState({ maxAmount });
        this.setState({ annualInterest: 0.1 });
      } else {
        this.setState({ maxAmount: 10000 });
        this.setState({ annualInterest: 0.15 });
      }
    });
  };

  handleAmountChange = (value: number | undefined) => {
    this.setState({ amount: value || 0 });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const {
      period,
      loanType,
      annualInterest,
      amount,
      members,
      memberId,
      maxAmount,
      formDisabled
    } = this.state;

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
      <>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={3}>Crear Prestamo para un Afiliado</Title>
        </div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label={<span>Empleado</span>}>
            {getFieldDecorator("member", {
              initialValue: memberId,
              rules: [
                {
                  required: true,
                  message: "Empleado es requerido"
                }
              ]
            })(
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Seleccione un empleado"
                optionFilterProp="children"
                onChange={this.handleMemberChange}
                onBlur={this.handleMemberChange}
                filterOption={this.filterOptions}
              >
                {members.map(member => (
                  <Option
                    value={member.id}
                    key={member.id}
                  >{`${member.firstName} ${member.firstSurname}`}</Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item label={<span>Periodo</span>}>
            {getFieldDecorator("period", {
              initialValue: period,
              rules: [
                {
                  required: true
                }
              ]
            })(
              <InputNumber
                min={1}
                max={12}
                onChange={this.handlePeriodChange}
              />
            )}
          </Form.Item>
          <Form.Item label={<span>Tipo</span>}>
            {getFieldDecorator("loanType", {
              initialValue: loanType,
              rules: [
                {
                  required: true,
                  message: "Tipo es requerido"
                }
              ]
            })(
              <Select
                style={{ width: 200 }}
                optionFilterProp="children"
                onChange={this.handleLoanTypeChange}
                onBlur={this.handleLoanTypeChange}
                filterOption={this.filterOptions}
              >
                <Option value="TRUST">Fiduciario</Option>
                <Option value="AUTO">Automatico</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label={<span>Interés anual</span>}>
            {getFieldDecorator("annualInterest", {
              initialValue: annualInterest
            })(<Input disabled={true} />)}
          </Form.Item>

          <Form.Item label={<span>Monto</span>}>
            {getFieldDecorator("amount", {
              initialValue: amount
            })(
              <InputNumber
                onChange={this.handleAmountChange}
                max={maxAmount}
                min={500}
              />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" disabled={formDisabled}>
              Registro
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default Form.create<Props>()(AddLoan);
