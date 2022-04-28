import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin: 1rem 0;
  }

  .title-container {
    display: flex;
    flex-flow: row wrap; 
    justify-content: space-between;   
  }

  .text-container {
    display: flex;
    flex-direction: column; 
  }

  .pt-2 {
    margin-top: 2rem;
  }

  .cursor {
    cursor: pointer;
  }

`

export default globalStyle