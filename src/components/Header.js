import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const [close, setClose] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(selector);

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='logo' />
      </a>

      <Menu>
        { cars.map( (car,index) => (
          <a href='#' key={ index }>{ car }</a>
        )) }
      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <a href='#'>Menu</a>
        <CustomMenu  onClick={ () => setClose(true)} />
      </RightMenu>

      <BargerNav close={close}>
          <WrapClose>
            <CustomClose  onClick={ () => setClose(false)} />
          </WrapClose>
          { cars.map( (car,index) => (
             <li><a href='#' key={ index }>{ car }</a></li>
          )) }
      </BargerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
    position: fixed;
    min-height: 60px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    a {
      cursor: pointer;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
      font-weight: 600;
      padding: 10px;
      flex-wrap: nowrap;
      justify-content: center;
      transition: all 0.5s ease-out;

      @media (max-width: 1024px) {
       display: none;
      }
    }

    a:hover {
      background: hsla(0,0%,0%,.05);
      border-radius: 5px;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
   
    a {
      font-weight: 600;
      flex-wrap: nowrap;
      padding: 10px;


      @media (max-width: 1024px) {
        display: none;
       }
    }

    a:hover {
      background: hsla(0,0%,0%,.05);
      border-radius: 5px;
    }
`;

const CustomMenu = styled(MenuIcon)`
   display: none !important;

   svg:hover {
    background: hsla(0,0%,0%,.05);
    border-radius: 5px;
   }


   @media (max-width: 1024px) {
    display: block !important;
    cursor: pointer;
   }
`;

const BargerNav = styled.div`
   background: white;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   height: 100vh;
   width: 350px;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column;
   transform: ${props => props.close ? 'translateX(0)' : 'translateX(100%)' };
   transition: transform 1s;

   li {
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 20px 0;
    font-weight: 600;
   }
`;

const WrapClose = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    // padding: 10px;
    
`;