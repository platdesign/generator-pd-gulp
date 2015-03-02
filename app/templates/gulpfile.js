'use strict';

var gulp = require('gulp');


<% if (tasks.sass) { %>
// Load sass generator
var sass = require('pd-gulp-sass')(gulp);

sass.register({
	assets: {
		src: './assets/scss/*.scss',
		dest: './public/css'
	}
},{
	watch: {
		watch: './assets/scss/**/*.scss'
	}
});


<% } if (tasks.js) { %>
// Load js generator
var js = require('pd-gulp-js')(gulp);

js.register({
	assets: {
		src: './assets/js/*.js',
		dest: './public/js'
	}
});


<% } if (tasks.jade) { %>
// Load jade generator
var jade = require('pd-gulp-jade')(gulp);

jade.register({
	assets: {
		src: './assets/jade/**/*.jade',
		dest: './public/html'
	}
});
<% } %>

<% } if (tasks.gfx) { %>
// Load gfx generator
var gfx = require('pd-gulp-gfx')(gulp);

gfx.register({
	assets: {
		src: './assets/gfx/**/*.{jpg,jpeg,gif,png,svg}',
		dest: './public/gfx'
	}
});
<% } %>
