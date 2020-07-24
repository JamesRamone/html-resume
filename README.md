# html-resume

Create Your resume in HTML with [Tailwind CSS](https://tailwindcss.com) and export it to PDF.

## Installation
Clone this repository:
```bash
git clone git@github.com:JamesRamone/html-resume.git 
cd html-resume
```

Install dependencies:
```bash
npm install
```

## Usage
Run webserver server - you can use Node.js [http-server](https://www.npmjs.com/package/http-server), [PHP built-in server](https://www.php.net/manual/en/features.commandline.webserver.php) or any other development server.
I use [Valet Linux](https://cpriego.github.io/valet-linux/).

Change the address in `export-pdf.js` to match.
```js
await page.goto('http://resume.test', {waitUntil: 'networkidle2'});
```
Compile the css:
```bash
npm run dev
# or to watch for changes
npm run watch
```
Webpack will process the styles and export a PDF of your resume.

Add your resume content to `index.html`.

### Export PDF manually
To export pdf manually just run
```
node pdf-export.js
```
