# AJ's Simple Node JS YouTube Downloader

## Description
This is a simple node JavaScript CLI program that asks the user to input the URL for the YouTube Video(no audio) they want to download.

It then downloads to the users ~/Downloads folder with the file name of the YouTube Video as an mp4 file.

Additional features will be coming in the near future (such as a GUI, audio, etc.)

## Usage
There are ethical concerns and guidelines / terms of service we have to follow of course, so this is strictly for education purposes 🤫




## Installation
Assuming you have node installed, just run the code below. If you don't have node installed. Google how to get it.



```bash
npm install
```

## Features
- Packages Used:
  -   "prompt-sync": "^4.2.0",
  -   "ytdl-core": "^4.11.5"


## Usage

```bash

node download.js

```

----
<!-- 
## Code Used:

```javascript

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
const outputFilename = 'video.mp4'; // You could use ytdl to get the title and make a filename from it
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

``` -->

---
## Contributions
- AJ Javadi
- github.com/oshkoshbagoshh
- amirjavadi25@gmail.com
  
  
