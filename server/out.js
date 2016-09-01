var LogLevel = {
	TRACE : {
		value : 0,
		fxn : 't',
		name : 'TRACE'
	},
	DEBUG : {
		value : 10,
		fxn : 'd',
		name : 'DEBUG'
	},
	INFO : {
		value : 20,
		fxn : 'i',
		name : 'INFO '
	},
	WARN : {
		value : 30,
		fxn : 'w',
		name : 'WARN '
	},
	ERROR : {
		value : 40,
		fxn : 'e',
		name : 'ERROR'
	},
	FATAL : {
		value : 50,
		fxn : 'f',
		name : 'FATAL'
	}
};

var __logLevel = LogLevel.INFO;

function t(msg) {
	doLog(msg, LogLevel.TRACE);
}
function d(msg) {
	doLog(msg, LogLevel.DEBUG);
}
function i(msg) {
	doLog(msg, LogLevel.INFO);
}
function w(msg) {
	doLog(msg, LogLevel.WARN);
}
function e(msg) {
	doLog(msg, LogLevel.ERROR);
}
function f(msg) {
	doLog(msg, LogLevel.FATAL);
}

function setLevel(newLevel) {
	t('Changing log level from ' + __logLevel.name + ' to ' + newLevel.name);
	__logLevel = newLevel;
	t('Changed log level from ' + __logLevel.name + ' to ' + newLevel.name);
}

function doLog(msg, level) {
	if (__logLevel.value <= level.value) {
		console.log(date() + ' [' + level.name + '] ' + msg);
	}
}

function date() {
	return (new Date()).toISOString();
}

function testAll() {
	for ( var lvl in LogLevel) {
		setLevel(LogLevel[lvl]);
		outAll();
	}
}

function outAll() {
	console.log('========================================================');
	console.log('Checking level ' + __logLevel.name);
	t('Testing TRACE');
	d('Testing DEBUG');
	i('Testing INFO');
	w('Testing WARN');
	e('Testing ERROR');
	f('Testing FATAL');
	console.log(' ');
}

/*
 * MAKE STRINGS USEFUL Prototypes for String so it's not as annoying...
 */
if (typeof String.prototype.startsWith != 'function') {
	/**
	 * starts with functionality
	 * 
	 * @param {string}
	 *            string to match against
	 * @returns {boolean} <b>true</b> if this ends with string, <b>false</b>
	 *          otherwise
	 * 
	 * @usage 'bob'.startsWith('b'); => true
	 * @usage 'A long string'.startsWith('A lon') => true
	 * @usage 'A long string'.startsWith('A lone') => false
	 */
	String.prototype.startsWith = function(str) {
		return this.slice(0, str.length) == str;
	};
}

if (typeof String.prototype.endsWith != 'function') {
	/**
	 * starts with functionality
	 * 
	 * @param {string}
	 *            string to match against
	 * @returns {boolean} <b>true</b> if this starts with string, <b>false</b>
	 *          otherwise
	 * 
	 * @usage 'bob'.endsWith('b'); => true
	 * @usage 'A long string'.endsWith('string') => true
	 * @usage 'A long string'.endsWith('a string') => false
	 */
	String.prototype.endsWith = function(str) {
		return this.slice(-str.length) == str;
	};
}

if (typeof String.prototype.containsIgnoreCase != 'function') {
	/**
	 * Simple true/false to tell if the given string matches (ignoring case)
	 * some subset of <b>this</b> string
	 * 
	 * @param {string}
	 *            to match against (ignoring case)
	 * @returns {boolean} <b>true</b> if the string is contained (without
	 *          matching case), <b>false</b> otherwise
	 * 
	 * @usage 'my string'.containsIgnoreCase('str') => true
	 * @usage 'my long string'.containsIgnoreCase('long') => true
	 * @usage 'my long string'.containsIgnoreCase('LONG') => true
	 * @usage 'my super long string'.containsIgnoreCase('rings') => false
	 */
	String.prototype.containsIgnoreCase = function(str) {
		return this.search(new RegExp(str, 'i')) > -1;
	};
}

if (typeof String.prototype.replaceAll != 'function') {
	/**
	 * Replace all functionality
	 * 
	 * @param {string}
	 *            string to replace
	 * @param {string}
	 *            string to replace with
	 * @returns {string} with values replaced
	 * 
	 * @usage 'bob'.replaceAll('b','m'); => 'mom'
	 * @usage 'My very long string'.replaceAll(' ','_'); =>
	 *        'My_very_long_string'
	 */
	String.prototype.replaceAll = function(oldStr, newStr) {
		var tmpStr = this;
		while (tmpStr.indexOf(oldStr) > 0) {
			tmpStr = tmpStr.replace(oldStr, newStr);
		}
		return tmpStr;
	};
}

module.exports = {
	LogLevel : LogLevel,
	level : setLevel,
	t : t,
	d : d,
	i : i,
	w : w,
	e : e,
	f : f,
	test : testAll
};
