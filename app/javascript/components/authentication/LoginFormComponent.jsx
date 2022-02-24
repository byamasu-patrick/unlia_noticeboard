import React from "react";
import { BoxContainer, Input, FormContainer, BoldLink, MutedLink, SubmitButtom } from "./common";

export function LoginForm(props){
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />                
            </FormContainer>
            <MutedLink href="#">Forget your password? </MutedLink>
            <SubmitButtom type="submit">Signin</SubmitButtom>
            <MutedLink href="#">Don't have an account? <BoldLink href="#">Signup</BoldLink></MutedLink>
        </BoxContainer>
    ); 
};