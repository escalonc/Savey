import React, { Component } from "react";
import {InputNumber, Table} from "antd";
import ReportService from "./ReportService";
import MembersReportModel from "./MembersReportModel";

interface State {
    year: number,
    member: MembersReportModel[]
}

class MembersReport extends Component<{}, State> {

    reportService = new ReportService();
    state: State = {
        year: 2019,
        member: []
    };

    async componentDidMount() {



    }

    handleYearOnChange = async (year: number | undefined ) => {
        this.setState({ year: year || 2019 }, async () => {
            const member = await this.reportService.member(year || 2019);

            this.setState({member});
        });

    };


    render() {

        const { member, year } = this.state;

        const columns = [
            {
                title: 'Codigo Afiliado',
                dataIndex: 'memberId',
                key: 'memberId',
            },
            {
                title: 'Afiliado',
                dataIndex: 'member',
                key: 'member',
            },
            {
                title: 'Fecha de Afiliación',
                dataIndex: 'StartDate',
                key: 'StartDate',
            },
            {
                title: 'Inversión',
                dataIndex: 'Investment',
                key: 'Investment',
            },
            {
                title: 'Ahorro',
                dataIndex: 'Saving',
                key: 'Saving',
            },
            {
                title: 'Total',
                dataIndex: 'Total',
                key: 'Total',
            },
            
        ];

        return <div>
            <InputNumber max={9999} min={1999} onChange={this.handleYearOnChange} value={year} />
            <Table dataSource={member} columns={columns} />
        </div>;
    }

}

export default MembersReport;