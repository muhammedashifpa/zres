import React from 'react'
import styled from 'styled-components'

export const LoginButtons = () => {
  return (
    <>
      <div className="row ms-1 mb-1 flex justify-content-center w-100">
        <LoginButton className="">9</LoginButton>
        <LoginButton className="">8</LoginButton>
        <LoginButton className="">7</LoginButton>
      </div>

      <div className="row ms-1 flex  mb-1 justify-content-center w-100">
        <LoginButton className="">6</LoginButton>
        <LoginButton className="">5</LoginButton>
        <LoginButton className="">4</LoginButton>
      </div>
      <div className="row ms-1  mb-1 flex justify-content-center w-100">
        <LoginButton className="">3</LoginButton>
        <LoginButton className="">2</LoginButton>
        <LoginButton className="">1</LoginButton>
      </div>
      <div className="row ms-1  mb-1 flex justify-content-center w-100">
        <ClearButton className="">clear</ClearButton>
        <LoginButton className="">2</LoginButton>
        <SigninButton className="">sign in</SigninButton>
      </div>
    </>
  );
}

const LoginButton = styled.button`
    background: #040153;
    color: white;
    width: 70px;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 2px 0 2px;
    border:  none;
    outline: none;
  `

  const ClearButton = styled.button`
    background: #c30208;
    color: white;
    width: 70px;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 2px 0 2px;
    border: none;
    outline: none;
  `;

  const SigninButton = styled.button`
    background: #009751;
    color: white;
    width: 70px;
    padding: 10px 0;
    border-radius: 10px;
    margin: 0 2px 0 2px;
    border: none;
    outline: none;
  `;