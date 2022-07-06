/* eslint-disable @typescript-eslint/no-var-requires */
// import AutoImport from "unplugin-auto-import/webpack";
// import Components from "unplugin-vue-components/webpack";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// import IconsResolver from "unplugin-icons/resolver";
// import Icons from "unplugin-icons/webpack";
// import path from "path";

// const pathSrc = path.resolve(__dirname, "src");
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@": pathSrc,
//       },
//     },
//     plugins: [
//       AutoImport({
//         // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
//         imports: ["vue"],
//         // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
//         resolvers: [
//           ElementPlusResolver({ importStyle: false }),
//           // 自动导入图标组件
//           IconsResolver({
//             prefix: "Icon",
//           }),
//         ],

//         dts: path.resolve(pathSrc, "auto-imports.d.ts"),
//       }),

//       Components({
//         resolvers: [
//           // 自动注册图标组件
//           IconsResolver({
//             enabledCollections: ["ep"],
//           }),
//           // 自动导入 Element Plus 组件
//           ElementPlusResolver({ importStyle: false }),
//         ],
//         dts: path.resolve(pathSrc, "components.d.ts"),

//         dirs: ["./src/components"],
//       }),

//       Icons({
//         autoInstall: true,
//       }),
//     ],
//   },
//   // @ts-ignore
//   chainWebpack: (config) => {
//     config.module
//       .rule("graphql")
//       .test(/\.graphql$/)
//       .use("graphql-tag/loader") // GraphQL Loader
//       .loader("graphql-tag/loader")
//       .end();
//   },
// };
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        extensions: [".ts", ".mjs"],
      },
    },
  },
};
