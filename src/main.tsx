import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {ChakraProvider} from "@chakra-ui/react";

import {system} from "../theme.ts";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <HomePage/>
    </ChakraProvider>
  </StrictMode>,
);
