// Next.js application URL
// In development: points to Next.js dev server (http://localhost:3000)
// In production: points to Vercel deployment (shpalljet-gjelber.vercel.app)

const getNextJsUrl = () => {
  // If environment variable is explicitly set, use it
  // Set REACT_APP_NEXTJS_URL="https://shpalljet-gjelber.vercel.app" for production
  // Set REACT_APP_NEXTJS_URL="http://localhost:3000" for development
  if (process.env.REACT_APP_NEXTJS_URL) {
    return process.env.REACT_APP_NEXTJS_URL;
  }
  
  // Default: In development use localhost, in production use Vercel URL
  if (process.env.NODE_ENV === 'development') {
    return "http://localhost:3000";
  }
  
  // In production, use Vercel URL
  return "https://gjelber-shpalljet.vercel.app";
};

const nextjsUrl = getNextJsUrl();

export { nextjsUrl };
