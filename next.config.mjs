/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';
const nextConfig = {
    reactStrictMode: true,      // Enable React strict mode for improved error handling
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development"     // Remove console.log in production
    }
};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
    disable: false  
})(nextConfig);
