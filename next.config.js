const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// 打包檔案大小圖形化功能
// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   // Image components 設置絕對路徑圖片的 domian
//   images: {
//     domains: ["picsum.photos"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
// });

module.exports = {
  reactStrictMode: true,
  // Image components 設置絕對路徑圖片的 domian
  images: {
    domains: ["picsum.photos"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
