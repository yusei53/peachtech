/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // 新ドメインへリダイレクトさせるための設定
        source: "/:path*",
        destination: "https://www.peach-tech.jp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
