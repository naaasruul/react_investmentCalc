import React, { useState } from "react";

export default function MyInput({onChange, userInput}) {



  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <span>
            <label htmlFor="">Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) => {
                onChange("initialInvestment", e.target.value);
              }}
            />
          </span>
        </p>

        <p>
          <span>
            <label htmlFor="">Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(e) => {
                onChange("annualInvestment", e.target.value);
              }}
            />
          </span>
        </p>
      </div>
      <div className="input-group">
        <p>
          <span>
            <label htmlFor="">Expected Return</label>
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(e) => {
                onChange("expectedReturn", e.target.value);
              }}
            />
          </span>
        </p>

        <p>
          <span>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(e) => {
                onChange("duration", e.target.value);
              }}
            />
          </span>
        </p>
      </div>
    </div>
  );
}
