<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 **/

return array(
    'js' => array('//js/profile-links-hover.js'),
    'css' => array('//css/reset.css', '//css/style.css', '//css/font.css', '//css/skeleton.css'),
    'jssh' => array(/*'//js/syntax/xregexp-min.js',*/ '//js/syntax/shCore.js', '//js/syntax/shBrushCss.js', '//js/syntax/shBrushPhp.js', '//js/syntax/shBrushPython.js', '//js/syntax/shBrushBash.js', '//js/syntax/shBrushJScript.js'),
    'csssh' => array('//css/syntax/shCore.css', '//css/syntax/shThemeGithub.css'),

    // custom source example
    /*'js2' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => create_function('$a', 'return $a;')
        ))
    ),//*/

    /*'js3' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => array('Minify_Packer', 'minify')
        ))
    ),//*/
);
