import { ChakraProvider } from "@chakra-ui/react";
import Employees from "./Employees";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Employees />
      </div>
    </ChakraProvider>
  );
};

export default App;
