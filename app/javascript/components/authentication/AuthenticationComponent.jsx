import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginFormComponent";
import { SignupForm } from "./SignupFormComponent"
import { motion } from 'framer-motion/dist/framer-motion';
import { AccountContext } from "./AccountContext";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2%;
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
const BackDrop = styled(motion.div)`
    width:160%;
    height: 550px;
    position: absolute;
    display: flex; 
    transform: rotate(60deg);   
    top: -290px;
    left: -70px;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(81, 45, 168);
    background: linear-gradient(
        58deg,
        rgba(81, 45, 168, 1) 20%,
        rgba(149, 117, 205, 1) 100%
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

const InnerContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
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

const expandedTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

const Authentication = (props) => {

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandedTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };
    const contextValue = { switchToSignup, switchToSignin };

    return (
       <AppContainer>
            <AccountContext.Provider value={contextValue}>                
                <BoxContainer>
                    <TopContainer>
                        <BackDrop 
                            initial={false}
                            animate={isExpanded ?  "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandedTransition}
                        />
                        {active === 'signin' && 
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>back</HeaderText>
                                <SmallText>Please sign-in to continue</SmallText>
                            </HeaderContainer>
                        }
                        {active === 'signup' && 
                            <HeaderContainer>
                                <HeaderText>Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>Please sign-up to continue</SmallText>
                            </HeaderContainer>
                        }
                        
                    </TopContainer>
                    <InnerContainer>
                        {active === 'signin' && <LoginForm />}
                        {active === 'signup' && <SignupForm />}
                    </InnerContainer>                
                </BoxContainer>
            </AccountContext.Provider>
       </AppContainer>
    ); 
};

export default Authentication;

