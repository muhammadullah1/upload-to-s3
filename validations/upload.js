const Joi = require('joi')
module.exports = {
  signedUrl: {
    body: Joi.object({
      fileName: Joi.string().required().label('File name'),
      ext: Joi.string().required().label('Extension'),
      mimeType: Joi.string().required().label('mimetype'),
    }),
  },
}
