"use client"; 
import React from "react";
import styled from "styled-components";
import "../globals.css"

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] grid place-content-center" >
      <StyledWrapper>
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>
    </StyledWrapper>
    </div>
  )
}
const StyledWrapper = styled.div``

export default Loading
