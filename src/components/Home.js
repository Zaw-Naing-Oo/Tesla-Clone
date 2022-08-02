import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
          id="Model 3"
          title= "Model 3"
          description = "Order Online for Touchless Delivery"
          leftButton = "Customer Order"
          rightButton = "Existing Inventory"
          backgroundImage = "model-3.jpg"
          logoSvg = "down-arrow.svg"
        />
        <Section 
          id="Model Y"
          title= "Model Y"
          description = "Order Online for Touchless Delivery"
          leftButton = "Customer Order"
          rightButton = "Existing Inventory"
          backgroundImage = "model-y.jpg"
        />
        <Section 
        title= "Model S"
        id="Model S"
        description = "Order Online for Touchless Delivery"
        leftButton = "Customer Order"
        rightButton = "Existing Inventory"
        backgroundImage = "model-s.jpg"
        />
        <Section 
        title= "Model X"
        id="Model X"
        description = "Order Online for Touchless Delivery"
        leftButton = "Customer Order"
        rightButton = "Existing Inventory"
        backgroundImage = "model-x.jpg"
        />
        <Section 
        title= "Solar Panels"
        id="Solar Panels"
        description = "Lowest Cost Solar Panels in America"
        leftButton = "Order now"
        rightButton = "learn more"
        backgroundImage = "solar-panel.jpg"
        />
        <Section 
        title= "Solar Roof"
        id="Solar Roof"
        description = "Produce Clean Energy From Your Roof"
        leftButton = "Order now"
        rightButton = "learn more"
        backgroundImage = "solar-roof.jpg"
        />
        <Section 
        title= "Accessories"
        id="Accessories"
        description = ""
        leftButton = "Shop now"
        backgroundImage = "accessories.jpg"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
`;