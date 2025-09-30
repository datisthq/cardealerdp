#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const version = process.argv[2];
if (!version) {
  console.error('Usage: node build-profile.js <version>');
  process.exit(1);
}

const profilePath = path.join(process.cwd(), 'profile.json');

try {
  // Read the profile.json file
  const profileContent = fs.readFileSync(profilePath, 'utf8');

  // Replace vX.X.X/schemas with the provided version
  const updatedContent = profileContent.replace(/v\d+\.\d+\.\d+\/schemas/g, version);

  // Write the updated content back
  fs.writeFileSync(profilePath, updatedContent);

  console.log(`Successfully updated profile.json with version: ${version}`);
} catch (error) {
  console.error('Error processing profile.json:', error.message);
  process.exit(1);
}