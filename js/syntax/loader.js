/**
 * hax syntaxhighlighter invocation. syntax highlighter may not be loaded 
 * so we'll just keep trying to call it. could definitely be cleaner.
 *
 */
var f = function() {
	typeof(SyntaxHighlighter) === 'undefined' ? setTimeout(f, 100) : SyntaxHighlighter.highlight();
}
f()