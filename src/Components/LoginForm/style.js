import styled from "styled-components";

export const SignForm = styled.form`
width: 33%;
padding: 1.5rem 4rem;
margin: 0 auto;
margin-top: 8%;
margin-bottom: 4%;
border: 1px  solid #d5e0d5;
border-radius: 0.8rem;
display: flex;
flex-direction: column;
gap: 1.4rem;

&.signup{
    width: 45%;
    padding: 2rem 2.5rem;
    gap: 1.1rem;
}
`
export const LoginTitle = styled.h1`
font-size: 1.5rem;
text-align: center;
`
export const Flex = styled.div`
display: flex;
justify-content: space-between;
&>div{
    width: 47%;
}
`
export const Error =styled.p`
color:red;
font-size: 0.8rem;
`