/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const SubscriptionPlan = ({
  name,
  price,
  storage,
  numberofusers,
  onlineapps,
  offlineapps,
  datarec,
  domain,
}) => {
  return (
    <div className="subscription-plan">
      <div className="btm-border">
        <h3>{name}</h3>
        <p className="price">{price}/month</p>
      </div>
      <div>
        <ul>
          <li>{numberofusers} Users</li>
          <li>{storage} Storage</li>
          <li className={!onlineapps ? "unavailable" : ""}>
            Online App Access
          </li>
          <li className={!offlineapps ? "unavailable" : ""}>
            Offline App Access
          </li>
          <li className={!datarec ? "unavailable" : ""}>
            Data Recovery Support
          </li>
          <li className={!domain ? "unavailable" : ""}>Personal Domain</li>
        </ul>
        <button className="subscribe-btn">Choose Plan</button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
