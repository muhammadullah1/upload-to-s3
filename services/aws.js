const AWS = require("aws-sdk");

let awsconfig = {
  region: "",
  accessKey: "",
  secretAccessKey: "",
};

exports.newS3Client = () => {
  return new AWS.S3({
    signatureVersion: "v4",
    region: awsconfig.region,
    credentials: {
      accessKeyId: awsconfig.accessKey,
      secretAccessKey: awsconfig.secretAccessKey,
    },
  });
};
