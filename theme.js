import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
    theme: {
        breakpoints: {
            mid: "600px"
        }
    },
});
export const system = createSystem(defaultConfig, config);
