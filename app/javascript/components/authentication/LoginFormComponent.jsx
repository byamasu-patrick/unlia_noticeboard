import React, { useContext } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, Input, FormContainer, BoldLink, MutedLink, SubmitButtom } from "./common";

export function LoginForm(props){

    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />                
            </FormContainer>
            <MutedLink href="#">Forget your password? </MutedLink>
            <SubmitButtom type="submit">Signin</SubmitButtom>
            <MutedLink>Don't have an account? <BoldLink onClick={switchToSignup}>Signup</BoldLink></MutedLink>
        </BoxContainer>
    ); 
};
