import React, { Component } from "react";
import { InputNumber, Table } from "antd";
import ReportService from "./ReportService";
import MembersReportModel from "./MembersReportModel";
import { RouteComponentProps } from "@reach/router";
import Title from "antd/lib/typography/Title";

interface Props extends RouteComponentProps {}

interface State {
  year: number;
  member: MembersReportModel[];
}

class MembersReport extends Component<Props, State> {
  reportService = new ReportService();
  state: State = {
    year: 2019,
    member: []
  };

  async componentDidMount() {}

  handleYearOnChange = async (year: number | undefined) => {
    this.setState({ year: year || 2019 }, async () => {
      const member = await this.reportService.member(year || 2019);

      this.setState({ member });
    });
  };

  render() {
    const { member, year } = this.state;

    const columns = [
      {
        title: "Codigo Afiliado",
        dataIndex: "memberId",
        key: "memberId"
      },
      {
        title: "Afiliado",
        dataIndex: "member",
        key: "member"
      },
      {
        title: "Fecha de Afiliación",
        dataIndex: "startDate",
        key: "startDate"
      },
      {
        title: "Inversión",
        dataIndex: "investment",
        key: "investment"
      },
      {
        title: "Ahorro",
        dataIndex: "saving",
        key: "saving"
      },
      {
        title: "Total",
        dataIndex: "total",
        key: "total"
      }
    ];

    return (
      <div>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={3}>Nuevos afiliados por año</Title>
        </div>
        <InputNumber
          max={9999}
          min={1999}
          onChange={this.handleYearOnChange}
          value={year}
        />
        <Table dataSource={member} columns={columns} />
      </div>
    );
  }
}

export default MembersReport;
