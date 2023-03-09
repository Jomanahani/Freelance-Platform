import React from 'react'
import styled from 'styled-components'

const Footer =styled.footer`
    width: 96%;
    height: 7.5rem;
    position: relative;
    bottom: 1.5rem;
    margin: auto;
    background-color: #001e00;
    color: white;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
`

export default function FormFooter() {
  return (
    <Footer>
        <p>© 2015-2023 Upwork® Global Inc • Privacy Policy</p>
    </Footer>
  )
}
