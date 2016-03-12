module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // 2. Package configuration for files goes here.
        copy: {
            // 
            wp_local_dev: {
                files: [
                    { 
                        expand: true,
                        cwd: "/path/to/theme/",
                        src: ["*", "**/*", "!.git", "!.DS_Store"], 
                        dest:"/path/to/local/dev/themes/" 

                    }
                ]
            }
        },
        watch: {
            options: {
                livereload: false,
            },
            all: {
                files: ['path/to/theme/*', 'path/to/theme/**/*'],
                tasks: ['copy']
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
};