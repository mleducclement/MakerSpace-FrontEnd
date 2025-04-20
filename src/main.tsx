import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {ChakraProvider} from "@chakra-ui/react";

import "./token.gen.d.ts";
import "./conditions.gen.d.ts";
import {system} from "../theme.ts";
import Layout from "@/pages/Layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Layout/>
    </ChakraProvider>
  </StrictMode>,
);
