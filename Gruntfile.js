// ============================================================================================= //
//                                       GRUNT - GRUNTFILE                                       //
// ============================================================================================= //

module.exports = function (grunt) {
    // ------------------------------------------------------------------------- //
    // TIME GRUNT
    // ------------------------------------------------------------------------- //

    require('time-grunt')(grunt);

    // ------------------------------------------------------------------------- //
    // CONFIGURATION
    // ------------------------------------------------------------------------- //

    require('load-grunt-config')(grunt, {
        data: {
            assets: 'assets',
            css: 'assets/css',
            image: 'assets/css/images',
            js: 'assets/js',
            npm_vendor: 'node_modules'
        }
    });

    // ------------------------------------------------------------------------- //
    // TASKS
    // ------------------------------------------------------------------------- //

    /**
     * Task: default
     * Description: Grunt default task.
     */
    grunt.registerTask('default', [
        'watch'
    ]);

    /**
     * Task: theme
     * Description: Generate CSS files.
     */
    grunt.registerTask('theme', [
        'scsslint',
        'sass',
        'newer:imagemin'
    ]);
};
