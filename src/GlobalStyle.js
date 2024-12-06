import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Pretendard-Regular', sans-serif;
    }
`;

export default GlobalStyle;
