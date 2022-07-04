import React from 'react'
import styled from 'styled-components';
import { RightHeader } from './RightHeader';



export const RightSide = () => {
  return (
    <>
      <div className="right bg-light">
        <RightHeader />
        <Categories className="categories mt-5">
          <div className="bottons text-center">
            {categoriesBtn &&
              categoriesBtn.map((button,index) =>
                <button key={index} className="btn shadow  py-4 mx-2 my-2 text-center" style={{background: button.gradient}}>{button.name}</button>
              )}
          </div>
        </Categories>
      </div>
    </>
  );
}

const Categories = styled.div`
button{
  width: 130px;
  font-size: 12px;
  font-weight: 600;
}
`
const categoriesBtn = [
  {
    gradient: "linear-gradient(0deg, #DAE12D 44.6%, #F9F9F9 134.9%)",
    name: "Burger",
  },
  {
    gradient: "linear-gradient(0deg, #9D6EA7 4.9%, #FFFFFF 143%)",
    name: "Beverages",
  },
  {
    gradient: "linear-gradient(0deg, #31CDD2 0%, #FCFCFC 130.4%)",
    name: "Pista",
  },
  {
    gradient: "linear-gradient(37.38deg, #31CDD2 2.78%, #FCFCFC 120.3%)",
    name: "Coffee",
  },
  {
    gradient: "linear-gradient(0deg, #E1870E 5.8%, #FCFCFC 134%)",
    name: "Noodles",
  },
  {
    gradient: "linear-gradient(0deg, #858181 0%, #FCFCFC 148.1%)",
    name: "Steak",
  },
  {
    gradient: "linear-gradient(37.93deg, #E1870E 0%, #FCFCFC 115.9%)",
    name: "Desserts",
  },
  {
    gradient: "linear-gradient(0deg, #9D6EA7 0%, #FCFCFC 155.4%)",
    name: "Pasta",
  },
  {
    gradient: "linear-gradient(359.66deg, #DAE12D 0.26%, #FCFCFC 152.07%)",
    name: "Appetzers",
  },
  {
    gradient: "linear-gradient(0deg, #31CDD2 100%, #FCFCFC 131.6%)",
    name: "Indian Breads",
  },
  {
    gradient: "linear-gradient(71.07deg, #31CDD2 25.54%, #FCFCFC 108.76%)",
    name: "Thai Food",
  },
  {
    gradient: "linear-gradient(3.3deg, #9D6EA7 97.56%, #FCFCFC 140.34%)",
    name: "Rice",
  },
  {
    gradient: "linear-gradient(70.61deg, #858181 26.04%, #FCFCFC 109.16%)",
    name: "Appetzers",
  },
];

