const config = require("../config");
const mime = require("mime-types");
const { newS3Client } = require("../services/aws");

const createSignUrl = (params) => {
  return new Promise(function (resolve, reject) {
    const S3 = newS3Client();
    S3.createPresignedPost(params, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
const signUrlByKey = (params, expiration = 1) => {
  const mimetype = mime.lookup(params.key);
  return new Promise((resolve, reject) => {
    const S3 = newS3Client();
    S3.createPresignedPost(
      {
        Bucket: config.get("aws.contentBucket"),
        Fields: {
          Key: params.key,
          ContentType: mimetype,
        },
        Metadata: {
          "Content-Type": mimetype,
        },
        Expires: expiration * 3600,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};
module.exports = {
  createSignUrl,
  signUrlByKey,
};
