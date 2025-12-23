const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ REQUIRED for Netlify static hosting
  output: "export",

  // ✅ Required to avoid next/image errors on Netlify
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "**",
      },
    ],
  },

  // ✅ Your existing Sass config (kept)
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
