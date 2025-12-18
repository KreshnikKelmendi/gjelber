// Next.js application URL
// In development: points to Next.js dev server (http://localhost:3000)
// In production: empty string means use relative path /shpalljet (same domain)
// Reverse proxy on gjelber.com will handle routing /shpalljet to Vercel app

const getNextJsUrl = () => {
  // If environment variable is explicitly set, use it
  // Set REACT_APP_NEXTJS_URL="" for production to use relative paths
  // Set REACT_APP_NEXTJS_URL="http://localhost:3000" for development
  if (process.env.REACT_APP_NEXTJS_URL !== undefined) {
    return process.env.REACT_APP_NEXTJS_URL;
  }
  
  // Default: In development use localhost, in production use relative path
  if (process.env.NODE_ENV === 'development') {
    return "http://localhost:3000";
  }
  
  // In production, return empty string to use relative paths
  // This will create links like /shpalljet instead of http://localhost:3000/shpalljet
  return "";
};

const nextjsUrl = getNextJsUrl();

export { nextjsUrl };
