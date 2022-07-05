import React from "react";
import { LeftSettingManager } from "./components/LeftSettingManager";
import { RightSettingManager } from "./components/RightSettingManager";

const SettingsManager = () => {
  return (
    <>
      <div className="container-fluid bg-light mt-4 p-2">
        <h5 className="">Settings Manager</h5>
        <div className="row">
          <LeftSettingManager />
          <RightSettingManager />
        </div>
      </div>
    </>
  );
};

export default SettingsManager;


