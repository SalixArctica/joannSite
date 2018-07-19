const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const BUCKET_NAME = 'joannstorage';
const IAM_USER_KEY = 'AKIAIJIV72KFUH4VVMOA';
const IAM_USER_SECRET = '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';

AWS.config.update({
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
  region: 'us-east-2'
});

const s3 = new AWS.S3();

getDb = () => {
  return new Promise((resolve, reject) => {
    var params = {
      Bucket: BUCKET_NAME,
      Key: 'database.json',
    };
    s3.getObject(params, function(err, data) {
      if (err) {
        reject(err);
      }
      else {
        resolve(JSON.parse(data.Body));
      }
    });
  })
}

getDb()
.then(
  (d) => {
    fs.writeFile(__dirname + '/database.json', JSON.stringify(d), (err) => {console.log(err);})
  }
)
.catch(
  (err) => console.log(err, err.stack)
)

loadDb = () => {
  let output = fs.readFileSync(__dirname + '/database.json', (err) => {if(err) console.log(err)});
  return JSON.parse(output);
}

let data = loadDb();

saveDb = (d) => {
  fs.writeFile(__dirname + '/database.json', JSON.stringify(d), (err) => {console.log(err);})
  uploadToS3('database.json', d, false);
}

function uploadToS3(filename, file, isImage) {

  getBuffer = () => {
    if(isImage) {
      return fs.readFileSync(file);
    } else {
      return Buffer.from(JSON.stringify(file));
    }
  }

  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: getBuffer(),
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}

module.exports = { data, loadDb, saveDb, uploadToS3 };
