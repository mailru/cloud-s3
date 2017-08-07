var AWS = require('aws-sdk');
var S3     = require('aws-sdk/clients/s3');

AWS.config.update({
	region: 'ru-msk',
	endpoint: 'http://hb.devmail.ru',
});

var s3 = new AWS.S3();

function GetObject(BucketName, ObjectName) {
	s3.getObject({
		Bucket: BucketName,
	 	Key: ObjectName,
	},function (err, data) {
		if (err) {
	      return alert('There was an error downloading your file: ', err.message);
	    }
	    console.log('Successfully downloaded file with etag: %s', data["ETag"]);
	});
}

function PutObject(BucketName, ObjectName, Content) {
	s3.upload({
		Bucket: BucketName,
	 	Key: ObjectName,
	    Body: Content,
	    ACL: 'public-read'
	}, function(err, data) {
	    if (err) {
	      return alert('There was an error uploading your file: ', err.message);
	    }
	    console.log('Successfully uploaded file with etag: %s', data["ETag"]);
	    GetObject(BucketName, ObjectName);
	});
}


PutObject('jiraf', "amazon", "content of file")





	





