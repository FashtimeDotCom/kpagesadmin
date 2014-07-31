module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    concat: {
      options: {
      },
      dist: {
        src: ['static/css/bootstrap_override.css', 'static/css/default.css'],
        dest: 'dist/<%= pkg.name %>.css'
      }
    },


    watch: {
      files: ['static/js/kpages.js'],
      tasks: ['jshint']
    },
    
    jshint: {
      file: ['static/js/kpages.js']
    }


  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('my-watch', ['watch']);



};