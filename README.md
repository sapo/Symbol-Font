# Symbol Font

An icon font made for Ink

## Tasks
Check the [TODO.md](https://github.com/sapo/Ink-Icons/blob/master/TODO.md) file

## Development tools

* Adobe Illustrator CS5
* Glyphs

## Build tools

* Node.js and Grunt
* ttf2eot
* sfnt2woff
* Sass
* ttfautohint
* Apple Font Tools Suite

### Setting up the build environment (OS X)

* Install [Node.js](http://nodejs.org/)
* Install **Grunt**. From a terminal run: ```npm install -g grunt-cli```
* Install **ttf2eot**. From a terminal run: ```brew install ttf2eot```
* Install **ttfautohint**. From a terminal run: ```brew install ttfautohint```
* Get **[sfnt2woff](http://people.mozilla.org/~jkew/woff/sfnt2woff)**.
  - Unzip the binary and put it somewhere available to your $PATH system variable, e.g. ```cp sfnt2woff /user/local/bin/```.
  - Make sure it is executable ```chmod +x /usr/local/bin/sfnt2woff```
* Get [Apple Font Tools Suite](https://developer.apple.com/fonts/FontTools3.0.pkg.zip)
  - Unzip and copy/move ftxanalyzer to somewhere available to your $PATH system variable, e.g. ```cp ftxanalyzer /user/local/bin/```.
  - Make sure it is executable ```chmod +x /usr/local/bin/sfnt2woff```
* Install SASS ```gem install sass``` or ```sudo gem install sass``` of you get errors.
* Run ```npm install``` from the Ink-Icons project root to finish the setup.

## Building the web fonts and css

There are 3 available Grunt tasks:

1. The ```default``` task: ```grunt```
 - It will clean up the ```dist/fonts``` and ```dist/css``` folders, recompile and minify the css and build the font files from the ```src/ttf``` file.
2. The ```css``` task: ```grunt css```
 - It will clean up the ```dist/css``` folder, recompile and minify the css.
3. The ```webfonts``` task: ```grunt webfonts```
 - It will clean up the ```dist/fonts``` folder and build the font files from the ```src/ttf``` file.
