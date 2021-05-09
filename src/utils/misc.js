const generateMongoURI = () => {
  return process.env.NODE_ENV === "production"
    ? process.env.MONGODB_PROD_URI
    : process.env.MONGODB_DEV_URI;
};

const getEnvironment = () => {
  return process.env.NODE_ENV === "production" ? "production" : "development";
};

module.exports = { generateMongoURI, getEnvironment };
