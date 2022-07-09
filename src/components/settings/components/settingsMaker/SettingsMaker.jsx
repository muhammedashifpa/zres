
import React from 'react'
import styled from 'styled-components';
import { MakerForm } from './componenrs/MakerForm';

const SettingsMaker = () => {
  return (
    <>
      <Container className="container-fluid p-4 bg-light">
        <h4 className="fs-5 fw-sm mb-3">Settings Maker</h4>
        <div className="row d-flex justify-content-between">
          <LeftWrapper className="col-4 p-3">
            <h6 className="fs-6 fw-bold">Account</h6>
            <ul className="mt-2">
              {dropDownMenus &&
                dropDownMenus.map((menus, index) => (
                  <li key={index} className="my-2">
                    <div className="dropdown">
                      <button
                        className="btn btn-success dropdown-toggle w-100 text-start"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {menus.name}
                      </button>
                      <ul className="dropdown-menu w-100 " aria-labelledby="dropdownMenuButton1">
                        {menus.subMenu.map((sub, index) => (
                          <li key={index}>
                            <a className="dropdown-item" href=" ">
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </LeftWrapper>
          <MakerForm title={"Show Multiple Tax Option"} />
        </div>
      </Container>
    </>
  );
}

export default SettingsMaker

const Container = styled.div`
  .btn,.btn:hover,.btn:focus{
    box-shadow: none;
    border: none;
    outline: none;
  }
`
const LeftWrapper = styled.div`
  background-color: #e0e0e0;
`;

const dropDownMenus = [
  {
    name: "Inventory",
    subMenu: [
      { name: "select menu" },
      { name: "select menu" },
      { name: "select menu" },
      { name: "select menu" },
    ],
  },
  {
    name: "Walk In",
    subMenu: [{ name: "select menu" }, { name: "select menu" }],
  },
  {
    name: "Dine In",
    subMenu: [{ name: "select menu" }, { name: "select menu" }, { name: "select menu" }],
  },
  {
    name: "CRM",
    subMenu: [{ name: "select menu" }, { name: "select menu" }, { name: "select menu" }],
  },
  {
    name: "Delivery Manager",
    subMenu: [
      { name: "select menu" },
      { name: "select menu" },
      { name: "select menu" },
      { name: "select menu" },
    ],
  },
];