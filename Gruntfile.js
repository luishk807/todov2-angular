module.exports=function(grunt){
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass:{
			dist:{
				options:{
					noCache: true,
					style:'expanded',
					sourcemap:'none'
				},
				files:{
					'temp/todo.css':'src/styles/todo.scss'
				}
			}
		},
		clean:{
			build:['temp']
		},
		copy:{
			main:{
				files:[
					{
						expand:true,
						cwd: 'temp/',
					    src: '**',
					    dest: 'dist/',
						filter:'isFile',
					},
					{
						expand:true,
						cwd: 'src/js/',
					    src: '**',
					    dest: 'dist/',
						filter:'isFile',
					},

				]
			}
		}
	})
	grunt.registerTask('default',['sass','copy','clean'])
}