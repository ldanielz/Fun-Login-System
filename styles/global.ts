import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-family: 'Google Sans', sans-serif, system-ui;
    background: ${(props) => props.theme['gray-300']};
    position: relative;
    overflow: hidden;
  }

  main {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    transition: all 0.2s ease;
  }

  form {
    padding: 1.5rem 4.9rem;
    background: #f8f9fa;
    display: grid;
    gap: 25px;
    border: 2px solid #dee2e6;
    box-shadow: 0 -1px 2px 0 hsl(220 3% 15%; / calc(1% + 2%)),
      0 2px 1px -2px hsl(220 3% 15% / calc(1% + 3%)),
      0 5px 5px -2px hsl(220 3% 15% / calc(1% + 3%)),
      0 10px 10px -2px hsl(220 3% 15% / calc(1% + 4%)),
      0 20px 20px -2px hsl(220 3% 15% / calc(1% + 5%)),
      0 40px 40px -2px hsl(220 3% 15% / calc(1% + 7%));

    position: relative;
    z-index: 2;
  }

  label {
    font-weight: var(--font-weight-9);
    color: var(--text-2);
  }
`
