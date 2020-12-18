// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react"
import { Container, Box } from "@material-ui/core"
import { Provider } from "react-redux"

import { store } from "./store"
import  Cart  from "./components/Cart"
import  Product  from "./components/Product"

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Product />
        </Box>
        <Box mt={5} mb={5}>
          <Cart />
        </Box>
      </Container>
    </Provider>
  )
}

export default App

