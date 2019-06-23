import React, { Component } from "react";
import { InputNumber, Table } from "antd";
import ReportService from "./ReportService";
import DividendsReportModel from "./DividendsReportModel";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {}

interface State {
  year: number;
  dividends: DividendsReportModel[];
}

class DividendsReport extends Component<Props, State> {
  reportService = new ReportService();
  state: State = {
    year: 2019,
    dividends: []
  };

  async componentDidMount() {}

  handleYearOnChange = async (year: number | undefined) => {
    this.setState({ year: year || 2019 }, async () => {
      const dividends = await this.reportService.dividends(year || 2019);

      this.setState({ dividends });
    });
  };

  render() {
    const { dividends, year } = this.state;

    const columns = [
      {
        title: "Codigo Afiliado",
        dataIndex: "memberId",
        key: "memberId"
      },
      {
        title: "Año",
        dataIndex: "year",
        key: "year"
      },
      {
        title: "Mes",
        dataIndex: "month",
        key: "month"
      },
      {
        title: "Afiliado",
        dataIndex: "member",
        key: "member"
      },
      {
        title: "Saldo",
        dataIndex: "balance",
        key: "balance"
      },
      {
        title: "Porcentaje Ganancia",
        dataIndex: "earningsPercentage",
        key: "earningsPercentage"
      },
      {
        title: "Ganancia",
        dataIndex: "earnings",
        key: "earnings"
      }
    ];

    return (
      <div>
        <h2> REPORTE DE DIVIDENDOS SEGUN EL AÑO  </h2>
        <InputNumber
          max={9999}
          min={1999}
          onChange={this.handleYearOnChange}
          value={year}
        />
        <Table dataSource={dividends} columns={columns} />
      </div>
    );
  }
}

export default DividendsReport;
