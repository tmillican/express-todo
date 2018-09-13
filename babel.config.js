const presets = [
  ["@babel/env", {
    useBuiltIns: "usage",
    targets: {
      node: "current"
    }
  }]
];

module.exports = { presets };
