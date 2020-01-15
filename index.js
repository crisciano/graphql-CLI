'use strict';
const robots = {
    directories: require('./js/directories'),
    questions: require('./js/questions'),
    files: require('./js/files')
}

const conf = require('./conf/conf').conf;

async function start() {
    await robots.questions(conf)
    await robots.directories(conf)
    await robots.files(conf)
}

start();