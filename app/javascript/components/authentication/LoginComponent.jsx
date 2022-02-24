import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginFormComponent";
import { motion } from 'framer-motion/dist/framer-motion';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #ffffff;
    box-shadow: 0 0 2px rgba(15, 15,15, 0.28);
    position: relative;
    overflow: hidden;
`;
const TopContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;
const BackDrop = styled.div`
    width:160%;
    height: 550px;
    position: absolute;
    display: flex; 
    transform: rotate(60deg);   
    top: -290px;
    left: -70px;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(241, 196,15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 15, 1) 100%
    );
`;
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const HeaderText = styled.h2`
        margin: 0;
        font-size: 30px;
        font-weight: 600;
        line-height: 1.24;
        color: #fff;
        z-index: 15;
`;
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerConatiner = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: '233%',
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const Login = (props) => {

    const [isExpanded, setExpanded] = useState(false);
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, 3000);
    };

    return (
       <AppContainer>
            <BoxContainer>
                <TopContainer>
                    <BackDrop 
                       />
                    <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>back</HeaderText>
                        <SmallText>Please sign-in to continue</SmallText>
                    </HeaderContainer>
                </TopContainer>
                <InnerConatiner>
                    <LoginForm />
                </InnerConatiner>
                {/* <p onClick={ playExpandingAnimation }>Click Me</p> */}
            </BoxContainer>
       </AppContainer>
    );
};

export default Login;

