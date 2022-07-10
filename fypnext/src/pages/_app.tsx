// ** Global css styles
import '../../styles/globals.css'
import '../../styles/tailwind.css'
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from 'next/app'
import { CookiesProvider } from "react-cookie"
import { ChakraProvider } from "@chakra-ui/react";
import { FeedbackContainer } from 'src/components/FeedBack/FeedbackContainer';
import { StyledEngineProvider } from '@mui/material/styles';


function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider>
      <CookiesProvider>
        <StyledEngineProvider injectFirst>
          <Component {...pageProps} />
        </StyledEngineProvider>
        <FeedbackContainer />
      </CookiesProvider>
    </ChakraProvider>
  )
}
export default MyApp