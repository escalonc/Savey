import React, { Component } from "react";

import { Form, Select } from "antd";
import MemberModel from "./Members/MemberModel";
import MemberService from "./Members/MemberService";

interface Props {
  getFieldDecorator: any;
  onChange: (memberId: number) => void;
}

interface State {
  memberId: number;
  members: MemberModel[];
}

class SelectMember extends Component<Props, State> {
  private memberService = new MemberService();

  state: State = {
    memberId: 1,
    members: []
  };

  async componentDidMount() {
    const members = await this.memberService.all();
    this.setState({ members });
  }

  filterOptions = (input: string, option: any) => {
    const children = (option.props.children as string) || "";
    return children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  handleMemberChange = async (memberId: number) => {
    this.props.onChange(memberId);
  };

  render() {
    const { memberId, members } = this.state;
    const { getFieldDecorator } = this.props;
    const { Option } = Select;

    return (
      <>
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
      </>
    );
  }
}

export default SelectMember;
