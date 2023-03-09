import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid #e4ebe4;

    &:hover{
        border-color: #c7d6c7;
    }
`
export default function FormInput(props) {
  return (
    <>
    <Input id={props.id} name={props.name} placeholder={props.placeholder} />
    </>
  )
}
