# Ink-Icons


An icon font made for Ink


## Tasks
Check the [TODO.md](https://github.com/sapo/Ink-Icons/blob/master/TODO.md) file


## Development tools

* Adobe Illustrator CS5
* FontLab Studio 5

## Build tools

* Node.js and Grunt
* ttf2eot
* sfnt2woff
* Sass

### Setting up the build environment (OS X)

* Install [Node.js](http://nodejs.org/)
* Install **Grunt**. From a terminal run: ```npm install -g grunt-cli```
* Install **ttf2eot**. From a terminal run: ```brew install ttf2eot```
* Get **[sfnt2woff](http://people.mozilla.org/~jkew/woff/sfnt2woff)**.
  - Unzip the binary and put it somewhere available to your $PATH system variable, e.g. ```cp sfnt2woff /user/local/bin/```.
  - Make sure it is executable ```chmod +x /usr/local/bin/sfnt2woff```
* Install SASS ```gem install sass``` or ```sudo gem install sass``` of you get errors.
* Run ```npm install``` from the Ink-Icons project root to finish the setup.

## Building the web fonts and css

There are 3 available Grunt tasks:

1. The ```default``` task: ```grunt```
 - It will clean up the ```dist/fonts``` and ```dist/css``` folders, recompile and minify the css and build the font files from the ```src/ttf``` file.
2. The ```css``` task: ```grunt css```
 - It will clean up the ```dist/css``` folder, recompile and minify the css.
3. The ```webfonts``` task: ```grunt```
 - It will clean up the ```dist/fonts``` folder and build the font files from the ```src/ttf``` file.
