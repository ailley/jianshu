module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/index.js',
        dest: 'build/index.min.js'
      }
    },
    jshint:{
      build:['Gruntfile.js','public/javascripts/**.js'],
      options:{
        jshintrc:'.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: 'public/javascripts/**.js',
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['jshint','uglify','watch']);

};