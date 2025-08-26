// import { HelmetProvider, Helmet } from "react-helmet-async";

const PageMeta = ({ title, description }) => (
    // <Helmet>
    //     <title>{title}</title>
    //     <meta name="description" content={description} />
    // </Helmet>
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
    </>

);

export const AppWrapper = ({ children }) => (
    // <HelmetProvider>{children}</HelmetProvider>
    { children }
);

export default PageMeta;