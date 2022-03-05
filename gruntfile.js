module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        files: [
          { src: ['index.html', 'overons.html', 'contact.html', 'trajecten.html', 'vacatures.html', 'meer.html'], dest: 'css/style.css' }
        ]
      }
    },
    cssmin: {
      dist: {
        files: [
          { src: 'css/style.css', dest: 'css/style.css' }
        ]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      your_target: {
        'css/style.css' : 'css/style.css'
      },
    },
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'css/style.css' : 'scss/style.scss'
        }
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('prepare', 'Prepare files for deplotment.', function() {
    grunt.task.run('sass');
    grunt.task.run('uncss');
    grunt.task.run('autoprefixer');
    grunt.task.run('cssmin');
  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}