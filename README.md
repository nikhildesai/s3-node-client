# s3-node-client
A node.js client example that can upload content to S3

##Pre-requisites

- The client expects credentials needed to access S3. For example, you can have these credentials set in ~/.aws.credentials

<pre>
[default]
aws_access_key_id = your_access_key
aws_secret_access_key = your_secret_key
</pre>

A quick way to setup credentials is to create an AWS IAM user and then grant it the AmazonS3FullAccess permission. Then create an access key for the IAM user.

- The client expects that a bucket is already created. Once you create the bucket, you need to use that name in the s3.putObject() call. The example uses a bucket called 'bucketName'.


##Usage

git clone <repo url>

npm install

node index.js
