/** @type {import('next').NextConfig} */

export default {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/media/:path*",
        destination: "/api/media/:path*",
      },
    ];
  },
};
