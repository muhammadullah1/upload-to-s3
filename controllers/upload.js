const uploadModel = require("../models/upload");
const ApiError = require("../utils/ApiError");
const { v4: uuidv4 } = require("uuid");
const { createSignUrl } = require("../services/s3SignedUrl");

module.exports = {
  createSignedUrl: async (req, res, next) => {
    try {
      const { orgId } = req.params;
      const { ext, fileName, mimeType } = req.body;

      const key = `uploads/${orgId}/${uuidv4()}.${ext}`;
      const params = {
        Bucket: config.get("aws.contentBucket"),
        Fields: {
          Key: key,
          ContentType: mimeType,
        },
        Metadata: {
          "Content-Type": mimeType,
        },
        Expires: 3600,
      };

      const url = await createSignUrl(params);
      const upload = await uploadModel.createSignUrl({
        fileName,
        mimeType,
        ext, 
      });

      res.send({
        success: true,
        message: "SignUrl generated successfully",
        data: {
          upload: {
            id: upload.id,
          },
          signedUrl: url,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  updateUpload: async (req, res, next) => {
    try {
      const { data } = req.body;

      await uploadModel.updateUpload(data);
      res.send({
        success: true,
        message: "file updated successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const uploads = await uploadModel.getAll({});

      res.send({
        success: true,
        message: "uplaod item list",
        data: uploads,
      });
    } catch (error) {
      next(error);
    }
  }
};
