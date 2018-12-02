var AWS = require('aws-sdk');
var S3 = require('aws-sdk/clients/s3');

AWS.config.update({
  region: 'ru-msk',
  endpoint: 'http://hb.bizmrg.com',
});

var s3 = new AWS.S3();

s3.getObject({Bucket: 'lookin-bucket', Key: 'LICENCE'}, function(err, data){
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
;
