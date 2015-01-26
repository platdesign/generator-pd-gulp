'use strict';

var gulp = require('gulp');


<% if (tasks.sass) { %>
// Register sass tasks
var sass = require('pd-gulp-sass-task')(gulp);

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
// Register javascript tasks
var js = require('pd-gulp-js-task')(gulp);

js.register({
	assets: {
		src: './assets/js/*.js',
		dest: './public/js'
	}
});


<% } if (tasks.jade) { %>
// Register jade tasks
var jade = require('pd-gulp-jade-task')(gulp);

jade.register({
	assets: {
		src: './assets/jade/**/*.jade',
		dest: './public/html'
	}
});
<% } %>
