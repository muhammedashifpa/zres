import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { IoIosPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const CrmMain = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div
            style={{
              width: "600px",
              height: "100px",
              backgroundColor: "#d3d3d3",
            }}
            class="border rounded-4"
          >
            <div className="row">
              <div className="col-md-3 mt-3 ">
                <NavLink
                  to="/pos/main/crm/sms"
                  className="nav-link"
                  aria-current="page"
                >
                  <div className="ms-5">
                    <h6>SMS</h6>
                    <BsFillChatLeftDotsFill
                      className="text-primary ms-1"
                      size={25}
                    />
                  </div>
                </NavLink>
              </div>
              <div className="col-md-4  p-3">
                <NavLink
                  to="/pos/main/crm/add-customer"
                  className="nav-link"
                  aria-current="page"
                >
                  <div className="ms-4">
                    <h6>ADD CUSTOMER</h6>
                    <IoIosPersonAdd className="text-primary ms-5" size={28} />
                  </div>
                </NavLink>
              </div>
              <div className="col-md-5  p-3">
                <NavLink
                  to="/pos/main/crm/customers"
                  className="nav-link"
                  aria-current="page"
                >
                  <div className="ms-3">
                    <h6>SHOW ALL CUSTOMER</h6>
                    <FaUsers className="text-primary ms-5" size={29} />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-3 mt-5">
          <div
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: "#d3d3d3",
            }}
            class="border  rounded-4 text-center"
          >
            <h4 className="mt-4">LOGO</h4>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-7 mt-5">
          <div class="input-group mb-3 input-group-lg  ">
            <span className="p-3 border  ">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Customer Mobile Number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text bg-primary" id="basic-addon2">
              Search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmMain;
