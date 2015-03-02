'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	initializing: function () {
		this.pkg = require('../package.json');
	},

	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the ultimate ' + chalk.red('PdGulp') + ' generator!'
		));

		var prompts = [{
			type: 'confirm',
			name: 'jade',
			message: 'Do you need jade in your project?',
			default: true
		},
		{
			type: 'confirm',
			name: 'sass',
			message: 'Do you need sass in your project?',
			default: true
		},
		{
			type: 'confirm',
			name: 'js',
			message: 'Do you need javascript in your project?',
			default: true
		},
		{
			type: 'confirm',
			name: 'gfx',
			message: 'Do you need graphics in your project?',
			default: true
		}];

		this.prompt(prompts, function (props) {
			this.tasks = props;
			done();
		}.bind(this));
	},

	writing: {
		app: function () {
			this.template('gulpfile.js', 'gulpfile.js');

		}
	},

	install: function () {

		this.npmInstall(['gulp'], { 'saveDev': true });

		if(this.tasks.gfx) {
			this.npmInstall(['pd-gulp-gfx'], { 'saveDev': true });
		}
		if(this.tasks.jade) {
			this.npmInstall(['pd-gulp-jade'], { 'saveDev': true });
		}
		if(this.tasks.js) {
			this.npmInstall(['pd-gulp-js'], { 'saveDev': true });
		}
		if(this.tasks.sass) {
			this.npmInstall(['pd-gulp-sass'], { 'saveDev': true });
		}

	}
});
