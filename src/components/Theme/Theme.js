import { createGlobalStyle } from "styled-components/macro";

const Theme = createGlobalStyle`
  :root {
    /* Colours */
    --color-white: hsl(0deg 0% 100%);

    --color-gray-100: hsl(185deg 5% 95%);
    --color-gray-300: hsl(190deg 5% 80%);
    --color-gray-500: hsl(196deg 4% 60%);
    --color-gray-700: hsl(220deg 5% 40%);
    --color-gray-900: hsl(220deg 3% 20%);

    --color-primary: hsl(340deg 65% 47%);
    --color-secondary: hsl(240deg 60% 63%);

    /* Font weights */
    --font-weight-normal: 500;
    --font-weight-medium: 600;
    --font-weight-bold: 800;
  }
`;

export default Theme;
