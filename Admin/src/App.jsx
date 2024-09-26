import './App.css';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
<<<<<<< HEAD
      <Outlet />
=======
    <ChakraProvider>
      <Outlet />
      </ChakraProvider>
>>>>>>> 401c16650fc9eda16378f19e2e79115db8550253
    </>
  );
}

export default App;
