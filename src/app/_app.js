// _app.js

import React from "react";
import Providers from "./providers";

function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
