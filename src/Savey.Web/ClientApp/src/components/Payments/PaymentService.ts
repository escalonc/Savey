import config from "../../config";
import axios from "axios";
import PaymentModel from "./PaymentModel";

class PaymentService {
  constructor(private paymentsUrl = `${config.baseUrl}/payments`) {}

  async create(memberId: number): Promise<PaymentModel> {
    const response = await axios.post(
      this.paymentsUrl,
      { memberId } as PaymentModel,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data as PaymentModel;
  }
}

export default PaymentService;
