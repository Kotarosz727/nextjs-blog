import '../styles/global.css'

//This App component is the top-level component which will be common across all the different pages.
//You need to restart the development server when you add pages/_app.js.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
