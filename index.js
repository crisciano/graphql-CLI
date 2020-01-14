'use strict';
const robots = {
    directories: require('./js/directories'),
    questions: require('./js/questions')
}

const conf = require('./conf/conf').conf;

async function start() {
    await robots.questions(conf)
    await robots.directories(conf)
}

start();