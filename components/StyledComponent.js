import React from 'react'
import styled , { css,keyframes }from 'styled-components'

let Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background-color:#5E6973;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

  @media (max-width:700px){
    background: grey;
  }


`

let Heading = styled.h2`
  color:#edf2f4;
  text-align:center;
  font-size:4em;
  text-transform: capitalize;
  font-weight:700;
  letter-spacing:3px
`

let InsideWrapper = styled.div`
  width:90%;
  height:20%;
  background-color:#36bbc4;
  display:flex;
  justify-content:space-around;
  align-items:center;
`


let Button =  styled.button`
  background-color: ${props => props.bg === "orange" ? "orange" : "#9FFFF5 "  };
  padding: 20px 15px;
  text-align:center;
  border-radius:5px;
  color:grey;

  &:hover{
    background-color:#7CFFC4;
    color:grey;
  }

  ${props => props.warning && css`
      background-color:yellow;
      color:black;

      &:hover{
        background-color:black;
        color:yellow;
      }

  `}

`




let DangerButton = styled(Button)`
  background-color:#ef233c;
  color:#edf2f4;

  &:hover{
    background-color:#edf2f4;
    color:#ef233c;
  }
`

let animations =  keyframes`
  0% {
    opacity:0;
  }

  100% {
    opacity:100%;
  }

`


let PassedProps = styled.p`
  color: ${props => props.color || "blue"};
  font-size: ${props => props.fontSize || "4em" };
  font-weight:600;
  animation: ${animations} 4s;
  animation-iteration-count: infinite;
 
`



function StyledComponent() {
  return (
    <div>
        <Wrapper>

          <Heading> Styled components </Heading>
          <InsideWrapper>

            <DangerButton type='submit' onClick={()=>{ alert("You clicked the DANGER BUTTON") }}>Danger Button</DangerButton>

            <Button type='submit' onClick={()=>{ alert("You clicked the SIMPLE BUTTON") }}>Just a Simple Button </Button>

            <Button bg="orange" warning type='submit' onClick={()=>{ alert("You clicked the WARNING BUTTON") }}>Warning Button </Button>


          </InsideWrapper>

          <PassedProps color="#ffafcc" fontSize="2em"> Passing props in StyledComponent With Animations</PassedProps>

        </Wrapper>


    </div>
  )
}

export default StyledComponent