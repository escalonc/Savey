import React, { Component } from "react";

import {
  Form,
  Input,
  Button,
  DatePicker
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import MemberService from "./MemberService";

interface Props extends FormComponentProps {}

interface State {
  firstName: string;
  middleName: string;
  firstSurname: string;
  secondSurname: string;
}

class AddMember extends Component<Props, State> {
  
  state: State = {
    firstName: "",
    firstSurname: "",
    middleName: "",
    secondSurname: ""
  };
  
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const service = new MemberService();
    
    const { firstName,middleName,firstSurname,secondSurname } = this.state;
    
    await service.create({firstName,firstSurname,middleName,secondSurname})
   
  };
  
  handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstName: event.target.value })
  };

  handleChangeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ middleName: event.target.value })
  };

  handleChangeFirstSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstSurname: event.target.value })
  };

  handleChangeSecondSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ secondSurname: event.target.value })
  };

  
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      secondSurname,
        firstSurname,
         firstName,
        middleName,
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
        <Form.Item label={<span>Primer Nombre</span>}>
          {getFieldDecorator("firstName", {
            initialValue: firstName,
            rules: [
              {
                // required: true,
                message: "Inserte su Primer Nombre!",
                whitespace: true
              }
            ]
          })(<Input name="firstName" onChange={this.handleChangeFirstName}/>)}
        </Form.Item>
        <Form.Item label={<span>Segundo Nombre</span>} >
          {getFieldDecorator("middleName", {
            initialValue: middleName,
            rules: [
              {
                // required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(<Input name="middleName" onChange={this.handleChangeMiddleName} />)}
        </Form.Item>
        <Form.Item label={<span>Primer Apellido</span>}>
          {getFieldDecorator("firstSurname", {
            initialValue: firstSurname,
            rules: [
              {
                // required: true,
                message: "Please input your surname!",
                whitespace: true
              }
            ]
          })(<Input name="firstSurname" onChange={this.handleChangeFirstSurname} />)}
        </Form.Item>
        <Form.Item label={<span>Segundo Apellido</span>}>
          {getFieldDecorator("secondSurname", {
            initialValue: secondSurname,
            rules: [
              {
                // required: true,
                message: "Please input your second surname!",
                whitespace: true
              }
            ]
          })(<Input name="secondSurname" onChange={this.handleChangeSecondSurname} />)}
        </Form.Item>
        <Form.Item label="Fecha inicio">
          {getFieldDecorator("date", {
            rules: [
              {
                // required: true,
                message: "La fecha de inicio es obligatoria"
              }
            ]
          })(<DatePicker />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Registro
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<Props>()(AddMember);
