// ============================================================================================= //
//                                         GRUNT - CLEAN                                         //
// ============================================================================================= //

module.exports = {
    js: [
        '<%= js %>/dist/*.js',
        '!<%= js %>/dist/*.min.js'
    ]
};