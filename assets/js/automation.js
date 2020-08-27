const $ = require('jquery');
const CodeMirror = require('codemirror');
require('codemirror/mode/yaml/yaml');
require('../css/automation.scss');

$(document).ready(function() {
	var cm = CodeMirror.fromTextArea($('textarea').get(0), {
		theme: 'abcdef',
		lineNumbers: true,
		indentUnit: 4,
	    styleActiveLine: true,
	    styleActiveSelected: true,
	    matchBrackets: true,
	    indentWithTabs: true,
	    mode: 'yaml',
	});
	cm.setSize('100%','100%');
	
	$('button[type="button"]').on('click', function() {
		let text = '[' + $(this).text() + ']';
		const doc = cm.getDoc();
	    const fromCursor = cm.getCursor('from');
	    const toCursor = cm.getCursor('to');
	    doc.replaceRange(text, fromCursor, toCursor);
	    cm.focus();
	    fromCursor.ch += text.length;
	    cm.setCursor(fromCursor);
	});
});

