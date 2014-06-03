module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('config.json'),

    clean: {
      fonts: [
        "<%= config.paths.dist.fonts.eot %>",
        "<%= config.paths.dist.fonts.otf %>",
        "<%= config.paths.dist.fonts.woff %>",
      ],
      css: [
        '<%= config.paths.dist.css.dir %>*.css'
      ],
      zapf: [
        "<%= config.paths.src.zapf %>"
      ]
    },

    command : {
        eot: {
            cmd  : 'echo <%= config.commands.eot %> < <%= config.paths.src.otf %> > <%= config.paths.dist.fonts.eot %>'
        },
        woff: {
            cmd  : '<%= config.commands.woff %> <%= config.paths.src.otf %> && mv src/otf/InkIcons-regular.woff <%= config.paths.dist.fonts.woff %>'
        },
        otf: {
          cmd  : 'cp <%= config.paths.src.otf %> <%= config.paths.dist.fonts.otf %>'
        },
        zapf: {
          cmd: ' <%= config.commands.zapf %> <%= config.paths.src.zapf %> <%= config.paths.src.ttf %><%= config.paths.src.font %>'
        }
        // ,hint: {
        //   cmd  : '<%= config.commands.hint %> -psw  <%= config.paths.src.otf %> <%= config.paths.dist.fonts.otf %>InkIcons.ttf'
        // }
    },

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            '<%= config.paths.dist.css.dir %><%= config.paths.dist.css.file %>': '<%= config.paths.src.sass %>'
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
                '<%= config.paths.dist.css.dir %>ink-icons.min.css': ['<%= config.paths.dist.css.dir %><%= config.paths.dist.css.file %>']
            }
        }
    },

    //
    font_sampler: {
      main: {
        options: {
          fontname: 'Ink-Icons',
          charmap: '<%= config.paths.src.zapf %>',
          dest: 'index.html',
          sass: 'src/sass/_glyphs.scss',
          sizes: [16,18,20,22,24,26,28,30,32,34,36,38,40],
          stylesheets: ["http://cdn.ink.sapo.pt/3.0.2/css/ink.min.css","dist/css/ink-icons.css"],
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
        files: ['<%= config.paths.src.otf %>'],
        tasks: ['webfonts'],
      },
      css: {
        files: ['<%= config.paths.src.sass %>**/*.scss'],
        tasks: ['css'],
      }
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
  grunt.registerTask('default', ['zapf','webfonts','font_sampler','css']);
  grunt.registerTask('zapf', ['clean:zapf','command:zapf']);
  grunt.registerTask('webfonts', ['clean:fonts','command:otf','command:eot','command:woff']);
  grunt.registerTask('css', ['clean:css','sass','cssmin']);
  grunt.registerTask('dev', ['watch']);


};
