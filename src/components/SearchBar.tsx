import {IoSearch} from "react-icons/io5";
import {Input, InputGroup} from "@chakra-ui/react";
import {useRef} from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <InputGroup startElement={<IoSearch size={24}/>} paddingStart={5} paddingEnd={3}>
      <Input ref={ref} placeholder="Search..." borderColor="gray.500" borderWidth="2px" borderRadius="3xl" size="xl" bg="white"/>
    </InputGroup>
  );
};

export default SearchBar;