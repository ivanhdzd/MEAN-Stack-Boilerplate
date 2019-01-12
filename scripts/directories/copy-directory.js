const { existsSync } = require('fs');
const { join } = require('path');

const { copyDirectory, deleteDirectory, readDirectory } = require('./main');

/**
 * HOW TO USE (RUN IN TERMINAL/POWERSHELL):
 * node copy-directory [origin-directory-name] [destination-directory-name]
 */

/** Check if params are valid */
if (process.argv.length !== 4) throw new Error('Params data incorrect.');

const ORIGIN = join(process.argv[2]);
const DESTINATION = join(process.argv[3]);

/** Check if ORIGIN directory already exists, else kill this script */
if (!existsSync(ORIGIN)) {
	console.info(`\nOrigin directory '${ ORIGIN }' not exists.\n`);
	return process.exit();
}

/** Remove old server/public directory */
if (existsSync(DESTINATION)) deleteDirectory(readDirectory(DESTINATION));

/** Copy directory from origin path to destination path */
copyDirectory(ORIGIN, readDirectory(ORIGIN), DESTINATION);

/** Finish this script */
process.exit();