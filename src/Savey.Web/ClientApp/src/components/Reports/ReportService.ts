import axios from "axios";
import config from "../../config";
import DividendsReportModel from "./DividendsReportModel";
import MembersReportModel from "./MembersReportModel";

class ReportService {
  constructor(private reportsUrl = `${config.baseUrl}`) {}

  async dividends(year: number) {
    const response = await axios.get(
      `${this.reportsUrl}/accounts/dividends/${year}`
    );

    return response.data as DividendsReportModel[];
  }

  async member(year: number) {
    const response = await axios.get(
      `${this.reportsUrl}/MemberReport/members/year/${year}`
    );

    return response.data as MembersReportModel[];
  }
}

export default ReportService;
