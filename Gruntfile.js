module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project object
     */
    project: {
      assets: 'js/assets',
      scss: [
        '<%= project.assets %>/main_src.scss'
      ],
      js: [
        '<%= project.src %>/js/**/*.js'
      ]
    },

    /**
     * Project banner
     */
    tag: {
      banner: '/* ' +
              ' * ! \n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */ \n'
    },

    /**
     * JS-HINT
     */
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', 'js/test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    /**
     * Concatonation
     */
    concat: {
       dist: {
         src: [
           '<%= project.assets %>/scss/*.scss',
         ],
         dest: '<%= project.assets %>/main_src.scss',
       },
       js: {
         src: [
           '<%= project.assets %>/**/*.js',
         ],
         dest: '<%= project.assets %>/main_src.js',
       }
     },

    /**
     * Sass
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: true
        },
        files: {
          '<%= project.assets %>/test/css/main.css': '<%= project.scss %>',
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          '<%= project.assets %>/css/main.css': '<%= project.scss %>',
        }
      }
    },

    /**
     * Watching for Changes w/ LIVERELOAD
     */
    watch: {
      files: ['js/assets/scss/*.scss', 'js/controllers/*.js'],
      tasks: ['default'],
      options: {
        livereload: true
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['concat', 'sass']);

};
