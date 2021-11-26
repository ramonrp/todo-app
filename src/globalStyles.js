import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
  font-size: 18px;

  --primary-bright-blue: hsl(220deg,98%,61%);
  --background-check: linear-gradient(
    hsl(192deg, 100%, 67%),
    hsl(280deg, 87%, 65%)
  ); 

  /*Light theme*/

--very-light-gray: hsl(0deg, 0%, 98%);
--very-light-grayish-blue: hsl(236deg, 33%, 92%);
--light-grayish-glue: hsl(233deg, 11%, 84%);
--dark-grayish-blue: hsl(236deg, 9%, 61%);
--very-dark-grayish-blue: hsl(235, 19%, 35%);

/* Dark Theme*/
--very-dark-blue: hsl(235deg, 21%, 11%);
--very-dark-desaturated-blue: hsl(235deg, 24%, 19%);
--light-grayish-blue: hsl(234deg, 39%, 85%);
--light-grayish-blue-hover: hsl(236deg, 33%, 92%);
--dark-grayish-blue: hsl(234deg, 11%, 52%);
--very-dark-grayish-blue: hsl(233deg, 14%, 35%);
--very-dark-grayish-blue: hsl(237deg, 14%, 26%);


}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
height: 100%;
 
  
}

`;

export { GlobalStyles };
