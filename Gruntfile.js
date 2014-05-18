module.exports = function (grunt) {
	console.log(grunt.option('env') || 'development');
	grunt.initConfig ({
		env: {
			options: {

			},
			dev: {
				NODE_ENV: grunt.option('env') || 'development',
				PORT: grunt.option('port') || 3000
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			compile: {
				files: [{
					expand: true,
					cwd: 'public/scss',
					src: ['*.scss'],
					dest: 'public/css',
					ext: '.css'
				}]
			}
		},
		watch: {
			css: {
				files: ['public/scss/*.scss'],
				tasks: ['sass'],
			},
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};