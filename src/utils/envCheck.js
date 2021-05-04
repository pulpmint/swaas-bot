const environtmentVariables = ["MONGODB_PROD_URI", "MONGODB_DEV_URI"];

const envCheck = () => {
  let missing = [];

  environtmentVariables.forEach(variable => {
    if (!process.env[variable]) missing.push(variable);
  });

  if (!!missing.length) {
    console.log("\nFollowing environment variables are missing:");

    missing.forEach(variable => console.log(`- ${variable}`));

    console.log("\nPlease add these variables in an env file.\n");

    process.kill(process.pid, "SIGTERM");
  }
};

module.exports = envCheck;
