import React from "react";
import "antd/dist/antd.css";
import Dashboard from "../Dashboard";

import { Router } from "@reach/router";

import DividendsReport from ".././../components/Reports/DividendsReport";
import AddMember from "../../components/Members/AddMember";

import AddLoan from "../../components/Loans/AddLoan";
import AddPayment from "../../components/Payments/AddPayment";
import MembersReport from "../../components/Reports/MembersReport";
import AddTransaction from "../../components/Transactions/AddTransaction";

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard>
        <Router>
          <AddLoan path="loans/add" />
          <AddPayment path="payments/add" />
          <AddMember path="members/add" />
          <AddMember path="/" />
          <DividendsReport path="reports/dividends" />
          <MembersReport path="reports/members" />
          <AddTransaction path="credit/add" />
        </Router>
      </Dashboard>
    </div>
  );
};

export default App;
