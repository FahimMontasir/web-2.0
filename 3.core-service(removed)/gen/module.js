/**
 * command: node gen/module.js folderName fileName(optional)
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('command: node gen/module.js folderName fileName(optional)');
  process.exit(1);
}
// Get folder and file names from command-line arguments
const folderName = process.argv[2];
const fileName = process.argv[3] || folderName;
// Define the target directory
const targetDirectory = path.join(
  __dirname,
  '..',
  'src',
  'app',
  'modules',
  folderName
);
// Create the target directory
fs.mkdirSync(targetDirectory, { recursive: true });
// Create and write the files in the target directory
const controllerTemplate = `
// Your controller code here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.controller.ts`),
  controllerTemplate
);
const serviceTemplate = `
// Your service code here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.service.ts`),
  serviceTemplate
);
const routesTemplate = `
// Define your routes here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.routes.ts`),
  routesTemplate
);
const interfacesTemplate = `
// Define your interfaces here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.interfaces.ts`),
  interfacesTemplate
);
const constantsTemplate = `
// Define your constants here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.constants.ts`),
  constantsTemplate
);
const validationTemplate = `
// Define your validations here
`;
fs.writeFileSync(
  path.join(targetDirectory, `${fileName}.validation.ts`),
  validationTemplate
);
console.info(
  `Folder '${folderName}' and files created successfully in 'src/app/modules'.`
);
