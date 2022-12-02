// LIBRARIES
import "../styles/globals.css"; // Styles from tailwind
import { type AppType } from "next/dist/shared/lib/utils";

// COMPONENTS
import Header from "components/templates/header";
import Footer from "components/templates/footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
