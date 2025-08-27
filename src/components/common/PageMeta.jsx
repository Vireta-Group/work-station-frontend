// import { HelmetProvider, Helmet } from "react-helmet-async";

// const PageMeta = ({
//   title,
//   description,
// }) => (
//   <Helmet>
//     <title>{title}</title>
//     <meta name="description" content={description} />
//   </Helmet>
// );

// export const AppWrapper = ({ children }) => (
//   <HelmetProvider>{children}</HelmetProvider>
// );

// export default PageMeta;



import { useEffect } from "react";

// This is the functional equivalent of the PageMeta component
const PageMeta = ({ title, description }) => {
  useEffect(() => {
    // Select the head element
    const head = document.head;

    // Change the title
    document.title = title;

    // Check if a meta description tag already exists
    let metaDescription = head.querySelector('meta[name="description"]');

    // If it doesn't exist, create it
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, [title, description]); // Re-run this effect whenever title or description changes

  // This component doesn't render anything to the DOM
  return null;
};

// This is the functional equivalent of the AppWrapper
// It's not strictly necessary as there's no context to provide,
// but it keeps the structure similar to the library example.
export const AppWrapper = ({ children }) => {
  return <>{children}</>;
};

export default PageMeta;
