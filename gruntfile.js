module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/main.css': 'scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        replace: {
            example: {
                src: ['index.html'],             // source files array (supports minimatch)
                overwrite: true,
                replacements: [{
                    pattern: 'sonnig',                   // string replacement
                    replacement: 'regnerisch'
                }, {
                    from: 'regnerisch',
                    to: 'sonnig'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['sass']);

};