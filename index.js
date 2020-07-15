'use strict';
const fs = require('fs');
const path = require('path');
const pify = require('pify');
const userHome = require('user-home');
const bplistParser = require('bplist-parser');
const untildify = require('untildify');

const bplist = pify(bplistParser);
const settings = path.join(userHome, '/Library/Preferences/com.runningwithcrayons.Alfred-Preferences-3.plist');
const prefsJsonPath = path.join(userHome, '/Library/Application Support/Alfred/prefs.json');

module.exports = async () => {
	let data;
	let errorMessage;

	try {
		console.log("updated.");
		console.log("@@ test 1..", prefsJsonPath);
		
		const settingFile = require(prefsJsonPath);

		console.log("@@ test 2", settingFile);

		const prefsPath = settingFile.current;
		
		console.log("@@ test 3", prefsPath);

		return {
			path: prefsPath
		};
	} catch (error) {
		errorMessage = `Alfred preferences not found at location ${prefsJsonPath}`;
	}

	if (errorMessage) {
		throw new Error(errorMessage);
	}
};
