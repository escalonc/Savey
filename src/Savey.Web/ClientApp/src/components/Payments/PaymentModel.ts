interface PaymentModel {
  id?: number;
  date: Date;
  amount: number;
  interest: number;
  memberId: number;
}

export default PaymentModel;
