import React from 'react'
import styled from 'styled-components';
import { LoginButtons } from './LoginButtons';




const Login = () => {
  return (
    <LoginOuterWrapper className="d-flex justify-content-between">
      <div className="w-100 ms-5">
        <LoginHead className="text-center ">Restaurant EnterpriseSystem</LoginHead>
      </div>
      <div className="">
        <div className="login-section">
          {/* login password section */}
          <LoginWrapper className="d-flex flex-column justify-content-center ">
            <LoginHeadTwo>
              <span>WELCOME TO</span>
              <br />
              <span>ZRES</span>
            </LoginHeadTwo>
            <LoginInputOuter className="mx-auto mb-2">
              <Input className="form-control" type="text" />
              <img
                className="img-fluid"
                src="/images/login/fingerprint.png"
                alt=""
                style={{ height: "50px" }}
              />
            </LoginInputOuter>
            <LoginButtons />
            <div></div>
          </LoginWrapper>
          {/* login password section */}
        </div>
      </div>
    </LoginOuterWrapper>
  );
}

export default Login;



const LoginOuterWrapper = styled.div`
  background-image: url("/images/login/blog-img-temp.png");
  height: 100vh;
  width: 100vw;
  background-size: contain;
  overflow: hidden;
`;

const LoginHead = styled.p`
  color: #fcfcfc;
  font-weight: 600;
  font-size: 50px;
  font-family: "Segoe UI", Arial, sans-serif;
  font-style: normal;
  margin-top: 150px;
`;


const LoginWrapper = styled.div`
  background: white;
  width: 500px;
  padding: 150px  0px 150px 0px;
  border-radius: 20px 0 0 20px;
`;

const LoginHeadTwo = styled.p`
  font-weight: 600;
  font-size: 20px;
  font-family: "Segoe UI", Arial, sans-serif;
  font-style: normal;
  text-align: center;
`;

const LoginInputOuter = styled.div`
  display: flex;
  border: 3px solid #ddd;
  
`
const Input = styled.input`
  border: none;
  outline: none;
  height: 50px;
`;
