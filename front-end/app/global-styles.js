import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
*{
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  `;
export default GlobalStyle;

export const GrandientsBlue = {
  colorStop1: '#6890F6',
  colorStop2: '#1757FB',
  shadowColor: '#122E75',
};

export const GrandientsOrange = {
  colorStop1: '#FF6F37',
  colorStop2: '#FF8F63',
  shadowColor: '#9B3D19',
};

export const GrandientsYellow = {
  colorStop1: '#FFDD26',
  colorStop2: '#FFBC31',
  shadowColor: '#AD8317',
};

export const GrandientsGreen = {
  colorStop1: '#03F5E3',
  colorStop2: '#00F7AF',
  shadowColor: '#1D9087',
};

export const GrandientsAlert = {
  colorStop1: '#F1892C',
  colorStop2: '#FF418C',
  shadowColor: '#3C100F',
};
