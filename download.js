const fs = require('fs');
const ytdl = require('ytdl-core');
const path = require('path');
const prompt = require('prompt-sync')({ sigint: true });

// Ask the user for the YouTube video URL
const videoUrl = prompt('Enter the YouTube video URL you want to download: ');

// Verify the URL
if (!ytdl.validateURL(videoUrl)) {
  console.error('The URL provided is not a valid YouTube video URL.');
  process.exit(1);
}

// Set the output directory to the user's downloads folder
const outputDirectory = path.join(require('os').homedir(), 'Downloads');
// const outputFilename = 'video.mp4'; // You could use ytdl to get the title and make a filename from it
const outputFilename = ytdl.getURLVideoID(videoUrl) + '.mp4';
console.log(`Saving video to ${outputDirectory}/${outputFilename}`);
const outputPath = path.join(outputDirectory, outputFilename);

try {
  ytdl(videoUrl)
    .pipe(fs.createWriteStream(outputPath))
    .on('finish', () => {
      console.log(`The video has been downloaded and saved to ${outputPath}`);
    })
    .on('error', (error) => {
      throw error;
    });
} catch (error) {
  console.error('An error occurred:', error.message);
}


