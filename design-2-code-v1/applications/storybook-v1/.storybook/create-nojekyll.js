import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
const nojekyllPath = path.join(__dirname, '../storybook-static', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('Created .nojekyll file in storybook-static');