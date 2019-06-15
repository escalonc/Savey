import React from "react";
import "antd/dist/antd.css";
import Dashboard from "../Dashboard";
import AddEmployee from "../../components/Employees/AddEmployee";

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard>
        <AddEmployee />
      </Dashboard>
    </div>
  );
};

export default App;
