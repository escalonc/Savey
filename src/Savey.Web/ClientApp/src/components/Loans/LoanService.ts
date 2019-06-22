import config from "../../config";
import axios from "axios";
import LoanModel from "./LoanModel";

class LoanService {
  constructor(private loansUrl = `${config.baseUrl}/loans`) {}

  async create(loan: LoanModel) {
    await axios.post(this.loansUrl, loan, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default LoanService;
