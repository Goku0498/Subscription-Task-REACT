/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SubscriptionPlan from "./Price-Card";
import data from "./data.json";

const App = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const handleToggle = (isAnnual) => {
    setIsAnnual(isAnnual);
  };

  return (
    <div id="root">
      <h2>Choose Your Plan</h2>
      <div className="toggle-switch">
        <button
          className={`month-btn ${!isAnnual ? "active" : ""}`}
          onClick={() => handleToggle(false)}
        >
          Monthly
        </button>
        <button
          className={`annual-btn ${isAnnual ? "active" : ""}`}
          onClick={() => handleToggle(true)}
        >
          Annual
        </button>
      </div>
      <div className="container">
        {data.map((sub) => (
          <SubscriptionPlan
            key={sub.id}
            name={sub.PlanName}
            price={isAnnual ? sub.AnnualPrice : sub.MonthlyPrice}
            storage={sub.StorageCapacity}
            numberofusers={sub.NumberOfUsers}
            onlineapps={sub.OnlineAppAccess}
            offlineapps={sub.OfflineAppAccess}
            datarec={sub.DataRecoverySupport}
            domain={sub.PersonalDomain}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
