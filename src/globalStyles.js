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
  font-family: 'Josefin Sans', sans-serif;


  /*Light theme */
--task-text-light: hsl(235, 19%, 35%);
--completed-text-light: hsl(233deg, 11%, 84%);
--background-task-light: white;
--background-light:  hsl(0deg, 0%, 98%);
--left-text-light: hsl(236deg, 9%, 61%);

 /*Dark theme */
--task-text-dark: hsl(234deg, 39%, 85%);
--completed-text-dark: hsl(233deg, 14%, 35%);
--background-task-dark: hsl(235deg, 24%, 19%);
--background-dark:  hsl(235deg, 21%, 11%);
--left-text-dark: hsl(235deg, 9%, 61%);

/*Common colors*/
--linear-gradient: linear-gradient(
    hsl(192deg, 100%, 67%),
    hsl(280deg, 87%, 65%)
  ); 
--active-tab: hsl(220deg, 98%, 61%);


@media (prefers-color-scheme: light) {
  --task-text: var(--task-text-light);
  --completed-text:var(--completed-text-light);
  --background-task: var(--background-task-light) ;
  --background:  var(--background-light);
  --left-text: var(--left-text-light);
}

@media (prefers-color-scheme: dark) {
  --task-text: var(--task-text-dark);
  --completed-text:var(--completed-text-dark);
  --background-task: var(--background-task-dark) ;
  --background:  var(--background-dark);
  --left-text: var(--left-text-dark);
}

[color-scheme="light"]{
  --task-text: var(--task-text-light);
  --completed-text:var(--completed-text-light);
  --background-task: var(--background-task-light) ;
  --background:  var(--background-light);
  --left-text: var(--left-text-light);
}


[color-scheme="dark"]{
  --task-text: var(--task-text-dark);
  --completed-text:var(--completed-text-dark);
  --background-task: var(--background-task-dark) ;
  --background:  var(--background-dark);
  --left-text: var(--left-text-dark);
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
}
`;

export { GlobalStyles };
