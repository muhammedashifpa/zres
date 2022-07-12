import React from "react";
import { LeftSettingManager } from "./components/LeftSettingManager";
import { RightSettingManager } from "./components/RightSettingManager";

const SettingsManager = () => {
  return (
    <>
      <div className="container-fluid bg-light p-4">
        <h5 className="">Settings Manager</h5>
        <div className="row d-flex justify-content-between">
          <LeftSettingManager />
          <RightSettingManager />
        </div>
        </div>
    </>
  );
};

export default SettingsManager;


