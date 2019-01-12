const { existsSync } = require('fs');
const { join } = require('path');

const { deleteDirectory, readDirectory } = require('./main');

/**
 * HOW TO USE (RUN IN TERMINAL/POWERSHELL):
 * node delete-directory [directory-name]
 */

/** Check if params are valid */
if (process.argv.length !== 3) throw new Error('Params data incorrect.');

const DIRECTORY = join(process.argv[2]);

/** Check if DIRECTORY directory already exists, else kill this script */
if (!existsSync(DIRECTORY)) {
	console.info(`\n'${ DIRECTORY }' directory not exists.\n`);
	return process.exit();
}

/** Feedback terminal message */
console.info(`\nDeleting '${ DIRECTORY }' directory with it content...\n`);
/** Delete '${ DIRECTORY }' directory with it content */
deleteDirectory(readDirectory(DIRECTORY));
/** Feedback terminal message */
console.info(`\n'${ DIRECTORY }' directory was deleted successfully.\n`);

/** Finish this script */
process.exit();