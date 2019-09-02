const fs = require('fs');
const path = require('path');
const glob = require(`glob`);
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const mime = require('mime-types');
const AWS = require('aws-sdk');
const project = require('../package.json');

require('dotenv').config();

const BUCKET_KEY = 'prod-tiger-themes-runner-s3-webdesigns';
const BUCKET_PUBLIC_URL = 'https://themes-tiger.zoovu.com/custom-dev'
const MAX_AGE = 30;

const DIST_DIRECTORY = path.normalize('./build/dist');
const PROJECT_DIRECTORY = project.name.replace('@', '');
const VERSION = project.version;
const BUILD = fs.existsSync('./build/dist/VERSION') ? fs.readFileSync('./build/dist/VERSION').toString() : Date.now();
const VERSION_DIRECTORY = `v${VERSION}`; // `v${VERSION}-build.${BUILD}`;

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

var s3 = new AWS.S3();

glob(path.join(DIST_DIRECTORY, '**/*'), function (error, filesToUpload) {
  let counter = 0;
  filesToUpload.filter(fileName => !!path.extname(fileName)).forEach((fileToUpload, index, filesToUpload) => {
    const normalizedFilePath = path.normalize(fileToUpload);
    const bucketPath = path.join('custom-dev', PROJECT_DIRECTORY, VERSION_DIRECTORY, normalizedFilePath.replace(DIST_DIRECTORY, ''));

    const params = {
      Bucket: BUCKET_KEY,
      Body: fs.createReadStream(normalizedFilePath),
      Key: bucketPath.split(path.sep).join(path.posix.sep),
      /**
       * Content-Disposition can be used when would you like to upload auto downloadable file.
       * e.g. Content-Disposition: 'attachment;filename="file_name.ext"'
       * @link http://iwantmyreal.name/s3-download-only-presigned-upload
       */
      // ContentDisposition: 'inline',
      /**
       * Default content type is binary/octet-stream
       * @link https://stackoverflow.com/questions/46621282/how-to-generate-viewable-s3-url-nodejs
       */
      ContentType: mime.lookup(normalizedFilePath),
      CacheControl: `max-age=${MAX_AGE}`,
    };

    s3.upload(params, function (err, data) {
      counter = counter + 1;
      if (err) {
        console.log(`${chalk.red('Error:')} "${normalizedFilePath.replace(DIST_DIRECTORY, '.').split(path.sep).join(path.posix.sep)}"`);
        console.log('       ', chalk.red(err));
      }
    
      if (data) {
        const progress = Math.round((counter / filesToUpload.length) * 100);
        console.log(`${progress < 10 ? ' ' : ''}${progress < 100 ? ' ' : ''}[${progress}%] ${chalk.green('Uploaded:')}`, chalk.yellow('"' + normalizedFilePath.replace(DIST_DIRECTORY, '.').split(path.sep).join(path.posix.sep) + '"'), mime.lookup(normalizedFilePath));

        if (counter === filesToUpload.length) {
          console.log('');
          console.log(chalk.yellow('====================================================================================================================='));
          console.log('');
          console.log(`    URL to Web Design: ${chalk.blue(`${BUCKET_PUBLIC_URL}/${PROJECT_DIRECTORY}/${VERSION_DIRECTORY}/`)}`);
          console.log('');
          try {
            clipboardy.writeSync(`${BUCKET_PUBLIC_URL}/${PROJECT_DIRECTORY}/${VERSION_DIRECTORY}/`);
            console.log(`    🏆  ${chalk.yellow('BONUS')} 🏆  copied URL into clipboard, so simple paste it in the "tiger-st3" platform 🦄`);
            console.log('');
          } catch(e) {}
          console.log(chalk.yellow('====================================================================================================================='));
          console.log('');
        }
      }
    });
  });
});
