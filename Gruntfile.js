module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ii: grunt.file.readJSON('inkicons.json'),

    clean: {
      fonts: [
        "<%= ii.dist.fonts %>*.eot",
        "<%= ii.dist.fonts %>*.ttf",
        "<%= ii.dist.fonts %>*.woff",
      ],
      css: [
        '<%= ii.dist.css %>*.css'
      ]
    },

    command : {
        eot: {
            cmd  : '<%= ii.commands.eot %> < <%= ii.src.ttf %>Ink-Icons.ttf > <%= ii.dist.fonts %>InkIcons.eot'
        },
        ttf: {
            cmd  : 'cp <%= ii.src.ttf %>Ink-Icons.ttf <%= ii.dist.fonts %>InkIcons.ttf'
        },
        woff: {
            cwd: './',
            cmd  : '<%= ii.commands.woff %> <%= ii.dist.fonts %>InkIcons.ttf'
        },
    },

    sass: {
        dist: {
            files: {
                '<%= ii.dist.css %>ink-icons.css': '<%= ii.src.sass %>Ink-Icons.scss'
            }
        }
    },

    cssmin: {
        dist: {
            options: {
                report: 'gzip',
                keepSpecialComments: 0
            },
            files: {
                '<%= ii.dist.css %>ink-icons.min.css': ['<%= ii.dist.css %>ink-icons.css']
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-commands');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['webfonts','css']);
  grunt.registerTask('webfonts', ['clean:fonts','command:eot','command:ttf','command:woff']);
  grunt.registerTask('css', ['clean:css','sass','cssmin']);


};
