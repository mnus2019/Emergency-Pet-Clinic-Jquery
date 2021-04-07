#  jQuery: Building an Interface


# Instructions
This is a code repository for the corresponding Front-End jQuery App: Building an Interface.

Create an interactive user interface that uses the strengths of jQuery, Bootstrap, Underscore.js, and the vast library of jQuery plugins. This project expresses how to use the jQuery selector engine to select DOM elements, and how to manage actions with jQuery events. This project uses external data with AJAX methods, and extends jQuery with plugins for templating webpages and formatting data and also shows how to sort and search through data with the Underscore.js library and add and edit form data. This hands-on project will strengthen your jQuery skills and help you build more sophisticated and responsive user interfaces.


# Installation
- Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
	- [gulp](http://git-scm.com/)

## Cloning All Branches


1. Open a linux compatible terminal application like [hyper](https://hyper.is/), the mac terminal or gitbash (you can install this when you install Git).
1. Switch to your desktop `cd ~/Desktop`
1. Create a new directory for the project `mkdir NAME`
1. Switch to your new directory `cd NAME`

### Cloning a Bare Repository
1. Clone a bare copy of this repository git clone --bare `path/to/repo.git .git` (make sure you add extra the .git at the end). You can copy the path to the repo from the clone or download button above.
1. `git config --bool core.bare false`
1. `git reset --hard `

### Install Dependencies
1. Install project dependencies using npm: `npm install`
1. Start the automation `gulp`