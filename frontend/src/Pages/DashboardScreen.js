import React from "react";

import DashboardMenu from "../components/DashboardMenu";

const DashboardScreen = () => {
  return (
    <>
    <div className="dashboard-screen row">
        {DashboardMenu.render({selected: 'dashboard'})}
        <div className="dashboard-content col-lg-9">
          <h1>Dashboard</h1>
          <div>
            info and Charts will be added here
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen;