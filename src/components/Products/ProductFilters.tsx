import {Box, Checkbox, Heading, Slider, Text, useSlider, VStack} from "@chakra-ui/react";
import "./filters.css";

const ProductFilters = () => {
  const tempCategories = ["Clothing", "Accessories", "Candles", "Home Decor", "Ceramics", "Toys"];

  // TODO: Calculate slider range based on min and max price of items
  const slider = useSlider({
    defaultValue: [20, 100],
  });

  const CategoriesFilter = () => {
    return (
      <Box>
        <Heading as="h3" mb={4} size="lg">
          Categories
        </Heading>
        {tempCategories.map((category) => <Text key={category} py={1} fontSize="16px"
                                                cursor="pointer">{category}</Text>)}
      </Box>
    );
  };

  const PriceRangeSlider = () => {
    return (
      <Box my={4}>
        <Heading as="h3" size="lg">
          Price Range
        </Heading>
        <Text fontWeight="bold" fontSize={14} my={2}>${slider.value[0]}  - ${slider.value[1]} </Text>
        <Slider.RootProvider width="200px" pt={3} value={slider} size="sm">
          <Slider.Control>
            <Slider.Track>
              <Slider.Range bg="orange.400"/>
            </Slider.Track>
            <Slider.Thumbs boxSize={5} border="6px solid" borderColor="orange.400"
                           boxShadow="0 0 10px 1px rgba(0, 0, 0, 0.5)"/>
          </Slider.Control>
        </Slider.RootProvider>
      </Box>
    );
  };

  const AvailabilityFilters = () => {
    return (
      <Box>
        <Heading as="h3" size="lg">
          Availability
        </Heading>
        <Checkbox.Root defaultChecked py={2} size={{base: "md", md: "sm"}}>
          <Checkbox.HiddenInput/>
          <Checkbox.Control/>
          <Checkbox.Label>In Stock</Checkbox.Label>
        </Checkbox.Root>
      </Box>
    );

  };

  return (
    <VStack px={{base: 0, md: 3}} py={3} alignItems="start">
      <CategoriesFilter/>
      <PriceRangeSlider/>
      <AvailabilityFilters/>
    </VStack>
  );
};

export default ProductFilters;