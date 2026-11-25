'use strict';

// Fails when a provider in data.json has no entry in scripts/provider-setup.js.
// Without one, generate-skill.js guesses the API key env var from the provider name.
const data = require('../data.json');
const SETUP = require('./provider-setup');

const missing = data.providers
  .map(p => p.name)
  .filter(name => !SETUP[name.toLowerCase()]);

if (missing.length) {
  for (const name of missing) {
    console.error(`No SETUP entry for "${name}". Add '${name.toLowerCase()}' to scripts/provider-setup.js.`);
  }
  process.exit(1);
}
console.log(`All ${data.providers.length} providers have a SETUP entry.`);
