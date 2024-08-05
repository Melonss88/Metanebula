module.exports = {
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      screens: {
        large: { min: "1920px" },
        xl: { min: "1530px" },
        big: { min: "970px" }, // 定义最小宽度为 970px 的断点
        small: { max: "970px" }, // 定义最大宽度为 970px 的断点
      },
      fontFamily: {
        santral: ["santral"],
        reB: ["reB"],
        BroB: ["BroB"],
        BroR: ["BroR"],
      },
    },
  },

  plugins: ["prettier-plugin-tailwindcss"],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
