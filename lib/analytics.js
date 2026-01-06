export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};
