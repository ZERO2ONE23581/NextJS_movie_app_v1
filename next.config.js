/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    //rewrite는 masking기능을 함; 마스크로 가리듯 원래 fetch url을 source에 있는 url로 가려줌.
    // api/movies를 fetch하는것 같지만 사실상 destination을 fetching하는것!!
    // localhost:3000/api/movies로 가보면 api json을 볼수있다.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
