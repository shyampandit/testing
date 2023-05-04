module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/about",
        destination: "https://www.learningcontainer.com",
      },
    ];
  };
  return {
    rewrites,
  };
};