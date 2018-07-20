# Nodejs for ClamAV Anti Virus

## Description
A Nodejs API to check if the uploaded submission is infected with a virus or not using ClamAV

## Prerequisites
1. Node >8.x
2. NPM
3. ClamAV installed on a host system

## Run Lint Test
```bash
npm test
```

## Local Deployment
```bash
npm run dev
```

## Production Build and Installation
How to build the application for upload to a server
```bash
Note: assume it is a dedicated server not AWS or Heroku.
```

## Manual Tests
 - Run the server `npm run dev`
 - Open `uploadTest.html`
 - Upload a File
 - Response will be displayed