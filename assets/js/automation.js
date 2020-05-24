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
        extraKeys: {
        	"Tab": function(cm){
        	    var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        	    cm.replaceSelection(spaces);
            }
        }
	}).setSize('100%');
});