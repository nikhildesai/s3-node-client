var AWS = require('aws-sdk');

var s3 = new AWS.S3();

function upload() {
   var params = {Bucket: 'bucketName', Key: 'myKey', Body: 'Hello!', ServerSideEncryption: 'AES256'};
   s3.putObject(params, function(err, data) {
    if (err)  {
      console.log(err);
    }  else {
      console.log(data);
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
}

module.exports = upload;
