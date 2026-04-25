const fs = require('fs');
const path = require('path');

const buildersPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@angular-architects',
  'native-federation',
  'builders.json'
);

if (!fs.existsSync(buildersPath)) {
  process.exit(0);
}

const builders = JSON.parse(fs.readFileSync(buildersPath, 'utf8'));
const build = builders && builders.builders && builders.builders.build;

if (build && build.implementation === './src/builders/build/builder') {
  build.implementation = './src/builders/build/builder.js';
  fs.writeFileSync(buildersPath, `${JSON.stringify(builders, null, 2)}\n`);
  console.log('Patched @angular-architects/native-federation builder path for Angular CLI ESM resolution.');
}

const loggerPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@softarc',
  'native-federation',
  'src',
  'lib',
  'utils',
  'logger.js'
);

if (fs.existsSync(loggerPath)) {
  const loggerSource = fs.readFileSync(loggerPath, 'utf8');

  if (loggerSource.includes('require("chalk")')) {
    fs.writeFileSync(
      loggerPath,
      `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogLevel = exports.logger = void 0;
let verbose = false;
exports.logger = {
    warn: (msg) => console.warn('WARN', msg),
    error: (msg) => console.error('ERRR', msg),
    notice: (msg) => console.log('NOTE', msg),
    info: (msg) => console.log('INFO', msg),
    verbose: (msg) => verbose && console.log('DBG!', msg),
    debug: (msg) => verbose && console.log('DBG!', msg),
};
const setLogLevel = (level) => {
    verbose = level === 'verbose';
};
exports.setLogLevel = setLogLevel;
`
    );
    console.log('Patched @softarc/native-federation logger to avoid ESM-only chalk loading.');
  }
}
