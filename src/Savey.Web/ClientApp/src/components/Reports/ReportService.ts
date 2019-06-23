import axios from "axios";
import config from "../../config";
import DividendsReportModel from "./DividendsReportModel";

class ReportService {

    constructor(private dividendsUrl = `${config.baseUrl}`) {}
    
    async dividends(year: number) {
        const response = await axios.get(`${this.dividendsUrl}/accounts/dividends/${year}`);
        
        return response.data as DividendsReportModel[];
    }
    
}

export default ReportService;