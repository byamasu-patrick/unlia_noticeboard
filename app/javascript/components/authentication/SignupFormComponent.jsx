import React, { useContext } from "react";
import { AccountContext } from "./AccountContext";
import { BoxContainer, Input, FormContainer, BoldLink, MutedLink, SubmitButtom } from "./common";

export function SignupForm(props){
    
    const { switchToSignin } = useContext(AccountContext);
    
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />                
            </FormContainer>
            <SubmitButtom type="submit">Signup</SubmitButtom>
            <MutedLink>Already have an account? <BoldLink onClick={switchToSignin}>Signin</BoldLink></MutedLink>
            
        </BoxContainer>
    ); 
};
 