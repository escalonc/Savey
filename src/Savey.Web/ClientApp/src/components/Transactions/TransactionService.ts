import axios from "axios";
import TransactionModel from "./TransactionModel";
import config from "../../config";

class TransactionService {
  constructor(private transactionUrl = `${config.baseUrl}/transactions`) {}
  async create(transaction: TransactionModel) {
    await axios.post(this.transactionUrl, transaction, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default TransactionService;
