import React from "react";
import "antd/dist/antd.css";
import Dashboard from "../Dashboard";
import AddMember from "../../components/Employees/AddMember";

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard>
        <AddMember />
      </Dashboard>
    </div>
  );
};

export default App;
