import React, { ChangeEvent, Component } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import LoanService from "./LoanService";
import { FormComponentProps } from "antd/lib/form";
import MemberService from "../Members/MemberService";
import MemberModel from "../Members/MemberModel";

interface State {
  amount: number;
  period: number;
  isPayed: boolean;
  annualInterest: number;
  loanType: string;
  memberId: number;
  members: MemberModel[];
}

interface Props extends FormComponentProps {}

class AddLoan extends Component<Props, State> {
  private memberService = new MemberService();

  state: State = {
    amount: 0,
    period: 12,
    isPayed: false,
    annualInterest: 3,
    loanType: "TRUST",
    memberId: 1,
    members: []
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

    // const service = new MemberService();
    //
    // const { firstName,middleName,firstSurname,secondSurname } = this.state;
    //
    // await service.create({firstName,firstSurname,middleName,secondSurname})
  };

  filterOptions = (input: string, option: any) => {
    const children = (option.props.children as string) || "";
    return children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  handleMemberChange = (memberId: number) => {
    this.setState({ memberId });
  };

  handlePeriodChange = (value: number | undefined) =>
    this.setState({ period: value || 1 });

  handleLoanTypeChange = (loanType: string) => this.setState({ loanType });

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const {
      period,
      loanType,
      isPayed,
      date,
      balance,
      annualInterest,
      amount,
      members,
      memberId
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
              name="secondSurname"
              min={1}
              max={12}
              onChange={this.handlePeriodChange}
            />
          )}
        </Form.Item>
        <Form.Item label={<span>Tipo</span>}>
          {getFieldDecorator("member", {
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
              filterOption={this.filterOptions}
            >
              <Option value="TRUST">Fiduciario</Option>
              <Option value="AUTO">Automatico</Option>
            </Select>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<Props>()(AddLoan);
