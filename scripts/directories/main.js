const { lstatSync, mkdirSync, readdirSync, readFileSync, rmdirSync, unlinkSync, writeFileSync } = require('fs');
const { join } = require('path');

/**
 * Copy directory content inside a destination directory.
 * @param {string} originPath directory.
 * @param {{ current: string, directories: string[], files: string[] }} JSON with files and directories paths.
 * @param {string} destinationPath directory.
 * @param {number} index (Optional) current directory index.
 * @param {number} count (Optional) directories array length.
 */
function copyDirectory(originPath, { current, directories, files }, destinationPath, index = 0, count = 1) {
	mkdirSync(destinationPath);
	directories.forEach((dir, i, arr) => {
		const destPath = join(destinationPath, dir.current.replace(originPath, ''));
		copyDirectory(dir.current, dir, destPath, i, arr.length);
	});
	files.forEach((filePath, i, arr) => {
		const file = readFileSync(filePath, 'base64');
		console.info(`  File ${ ++i } of ${ arr.length }: '${ filePath }' copied.`);
		filePath = join(destinationPath, filePath.replace(originPath, ''));
		console.info(`    Cpoying file ${ ++i } of ${ arr.length }: '${ filePath }'...`);
		writeFileSync(filePath, file, 'base64');
		console.info(`      File ${ ++i } of ${ arr.length }: '${ filePath }' copied.`);
	});
	console.info(`Directory ${ ++index } of ${ count }: '${ current }' copied.`);
}

/**
 * Delete directory content.
 * @param {{ current: string, directories: string[], files: string[] }} JSON with files and directories paths.
 * @param {number} index (Optional) current directory index.
 * @param {number} count (Optional) directories array length.
 * @returns {string} directory path deleted.
 */
function deleteDirectory({ current, directories, files }, index = 0, count = 1) {
	directories.forEach((dir, i, arr) => deleteDirectory(dir, i, arr.length));
	files.forEach((file, j, arr) => {
		unlinkSync(file);
		console.info(`  File ${ ++j } of ${ arr.length } deleted: ${ file }`);
	});
	rmdirSync(current);
	console.info(`Directory ${ ++index } of ${ count } deleted: ${ current }`);
	return current;
}

/**
 * Make a JSON with files and directories paths.
 * @param {string} directoryPath Absolute directory path.
 * @returns {{ current: string, directories: string[], files: string[] }} JSON with files and directories paths.
 */
function readDirectory(directoryPath) {
	let { directories, files } = readdirSync(directoryPath).reduce(({ directories, files }, item) => {
		const path = join(directoryPath, item);
		if (lstatSync(path).isFile()) files.push(path);
		else directories.push(path);
		return { directories, files };
	}, { directories: [], files: [] });
	directories = directories.map(dir => readDirectory(dir));
	return { current: directoryPath, directories, files };
}

module.exports = { copyDirectory, deleteDirectory, readDirectory };