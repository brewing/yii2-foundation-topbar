module.exports = function (grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bumpup: ['package.json', 'composer.json','bower.json'],

        release: {
            options: {
                bump:           false, //default: true
                tagName:        'v<%= version %>', //default: '<%= version %>'
                commitMessage:  'release v<%= version %>', //default: 'release <%= version %>'
                tagMessage:     'tagging version v<%= version %>' //default: 'Version <%= version %>'
            }
        },
        clean: {
            dist: ['<&= dist %>']
        },
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: [
                    '<%= assetsFont %>/*'
                ],
                dest: '<%= dist %>/fonts'
            },
            js:{
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: [
                    '<%= foundation %>/js/foundation.min.js',
                    '<%= foundation %>/js/foundation/foundation.topbar.js',
                    '<%= bowerComponents %>/modernizr/modernizr.js',
                    'js/app.js'
                ],
                dest: '<%= dist %>/js'
            }
        },
        replace: {
            readme: {
                src: ['README.md'],
                overwrite: true,
                replacements: [
                    {
                        from: /Version \d{1,1}\.\d{1,2}\.\d{1,2}/g,
                        to: 'Version <%= pkg.version %>'
                    }
                ]
            }
        },
        watch: {
            backend_scss:{
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        sass: {                              // Task
            navbarTask: {                            // Target
                options: {                       // Target options
                    outputStyle: 'compressed'
                },
                files: {                         // Dictionary of files
                    '<%= css %>/navbar.css': '<%= assetsScss %>/app.scss'       // 'destination': 'source'
                }
            }
        },
        assetsJs :          'js',
        assetsScss :        'scss',
        css :               '../dist/css',
        assetsFont :        'fonts',
        assetsImg :         'img',
        dist :              '../dist',
        foundation :        "bower_components/foundation",
        bowerComponents :   'bower_components',
        jsFiles:[
            '<%= foundation %>/js/foundation.min.js',
            '<%= foundation %>/js/foundation/foundation.topbar.js',
            '<%= navbar %>/bower_components/modernizr/modernizr.js',
            '<%= navbar %>/js/app.js'
        ]
    });

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('release', ['replace', 'release']);
    grunt.registerTask('default',['sass','copy']);
};