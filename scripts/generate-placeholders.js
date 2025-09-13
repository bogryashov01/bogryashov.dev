const fs = require('fs');
const path = require('path');

const projects = [
  'bonds',
  'albacio',
  'crechearia',
  'metacomm',
  'marinhosteel',
  'venticlean',
  'gclprive',
  'nidder',
  'ipmediation',
  'coppers',
  'bottomup',
  'lacoiffe',
  'duke',
  'kriva',
];

const svgTemplate = (title) => `
<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="400" height="300" fill="#13171C"/>
<text x="200" y="150" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#F5C542" text-anchor="middle">${title}</text>
</svg>`;

projects.forEach((project) => {
  const title = project.charAt(0).toUpperCase() + project.slice(1);
  const svg = svgTemplate(title);
  const base64 = Buffer.from(svg).toString('base64');
  const dataUri = `data:image/svg+xml;base64,${base64}`;

  fs.writeFileSync(path.join(__dirname, '../public/images', `${project}.jpg`), dataUri);
});

console.log('Generated placeholder images for all projects');
