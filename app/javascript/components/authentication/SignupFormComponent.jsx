import React from "react";
import { BoxContainer, Input, FormContainer, BoldLink, MutedLink, SubmitButtom } from "./common";

export function SignupForm(props){
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />                
            </FormContainer>
            <SubmitButtom type="submit">Signin</SubmitButtom>
            <MutedLink href="#">Already have an account? <BoldLink href="#">Signin</BoldLink></MutedLink>
        </BoxContainer>
    ); 
};