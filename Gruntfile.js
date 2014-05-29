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
            cmd  : '<%= ii.commands.eot %> < <%= ii.dist.fonts %>InkIcons.ttf > <%= ii.dist.fonts %>InkIcons.eot'
        },
        woff: {
            cwd: './',
            cmd  : '<%= ii.commands.woff %> <%= ii.dist.fonts %>InkIcons.ttf'
        },
        hint: {
          cmd  : '<%= ii.commands.hint %> -psw  <%= ii.src.ttf %>Ink-Icons.ttf  <%= ii.dist.fonts %>InkIcons.ttf'
        }
    },

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
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
    },

    //
    font_sampler: {
      lines: {
        options: {
          fontname: 'Ink-Icons',
          charmap: 'chars.json',
          dest: 'dist/sample.html',
          sizes: [16,18,20,22,24,26,28,30,32,34,36,38,40],
          stylesheets: ["http://cdn.ink.sapo.pt/3.0.2/css/ink.min.css","css/ink-icons.css"],
          col_width: 100,
          sample_template: '<div class="all-{% width %} p{% size %}">\n<p>{% size %}px</p>{% glyph %}</div>\n',
          glyph_template: '<span class="ii ii-{% glyph %}"></span>\n'
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      fonts: {
        files: ['<%= ii.src.ttf %>Ink-Icons.ttf'],
        tasks: ['webfonts','font_sampler'],
      },
      css: {
        files: ['<%= ii.src.sass %>**/*.scss'],
        tasks: ['css'],
      },
      sampler: {
        files: ['chars.json'],
        tasks: ['font_sampler'],
      },
    }

  });

  // load tasks
  grunt.loadNpmTasks('grunt-font-sampler');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-commands');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['webfonts','css','font_sampler']);
  grunt.registerTask('webfonts', ['clean:fonts','command:hint','command:eot','command:woff']);
  grunt.registerTask('css', ['clean:css','sass','cssmin']);
  grunt.registerTask('dev', ['watch']);


};
