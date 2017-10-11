module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //任务
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //配置
            build: {
                //源
                src: 'index.js',
                //目标
                dest: 'dist/index.min.js'
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);

};