import styled from "styled-components";

export const BoxContainer = styled.div`
    widthL 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.span`
    font-size: 11px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    margin: 12px 0px;  
    cursor: pointer;  
`;

export const BoldLink = styled.span`
    font-size: 12px;
    color: rgb(81, 45, 168);
    font-weight: 500;
    text-decoration: none; 
    cursor: pointer;  
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 400ms ease-in-out;
    font-size: 12px;

    &::placeholder{
        color: rba(200, 200, 200, 1);
    }
    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 1.5px solid rgb(81, 45, 168);
    }
`;

export const SubmitButtom = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    margin-top: 10px;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(81, 45, 168);
    background: linear-gradient(
        58deg,
        rgba(81, 45, 168, 1) 20%,
        rgba(149, 117, 205, 1) 100%
    );

    &:hover{
        filter: brightness(1.03);
    }
`;