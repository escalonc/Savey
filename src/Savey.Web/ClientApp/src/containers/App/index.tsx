import React from "react";
import "antd/dist/antd.css";
import Dashboard from "../Dashboard";
import DividendsReport from ".././../components/Reports/DividendsReport"
// import AddMember from "../../components/Employees/AddMember";

// import AddLoan from "../../components/Loans/AddLoan";

import MembersReport from "../../components/Reports/MembersReport"

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard>
        <MembersReport />
      </Dashboard>
    </div>
  );
};

export default App;
