import '../styles/globals.css'
import createStore from "../store/createStore"
import { Provider } from 'react-redux'
import { ChakraProvider,theme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider theme={theme}>
      <Provider store={ createStore() }>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
