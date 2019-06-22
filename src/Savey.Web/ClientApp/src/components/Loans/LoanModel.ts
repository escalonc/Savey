interface LoanModel {
  amount: number;
  period: number;
  isPayed?: boolean;
  annualInterest: number;
  loanType: string;
  memberId: number;
}

export default LoanModel;
