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
                src: ['index.html'],             // source files array
                overwrite: true,
                replacements: [{
                    from: /sonnig/g,
                    to: function (matchedWord) {
                        return 'regnerisch';
                    }
                }]
            },
            example2: {
                src: ['index.html'],             // source files array
                overwrite: true,
                replacements: [{
                    from: /regnerisch/g,
                    to: function (matchedWord) {
                        return 'sonnig';
                    }
                }]
            }
        },
        shell: {
            showIPconfig: {
                command: 'ipconfig'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['sass', 'replace', 'shell']);

};