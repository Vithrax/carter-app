import Document, { Head, Html, Main, NextScript } from "next/document";
import { getInitColorSchemeScript } from "@mui/joy/styles";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
