import React from "react";
import "../styles/SmartContract.css";

const SmartContract = () => {
  return (
    <div className="smart-contract-container">
      <div className="smart-contract lambo-token MaxWidth">
        <h3>Smart Contract</h3>
        <h3 className="primary-color">
          Contract address not published here in a verified form yet
        </h3>
        <div className="smart-contract-data dashed-border">
          <div className="col">
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Decimals: <span className="primary-color bold">18</span>
              </span>
            </div>
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Symbol: <span className="primary-color bold"> LMB</span>
              </span>
            </div>
          </div>
          <div className="col">
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Name: <span className="primary-color bold">LAMBO TOKEN</span>
              </span>
            </div>
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Supply:{"  "}
                <span className="primary-color bold">6.666.666</span>{" "}
              </span>
            </div>
          </div>
          <div className="col">
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Chain: <span className="primary-color bold">BEP20</span>
              </span>
            </div>
            <div>
              <span className="primarybullet"></span>
              <span className="semi-bold">
                Audit:{" "}
                <span className="primary-color bold">
                  Report not published on this site yet
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img className="circle-1" src="./sc-circle1.webp" alt=""  loading="lazy" decoding="async" />
      <img className="circle-2" src="./sc-circle2.webp" alt=""  loading="lazy" decoding="async" />
    </div>
  );
};

export default SmartContract;
