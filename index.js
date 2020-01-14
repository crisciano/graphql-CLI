const robots = {
    questions: require('./js/questions')

}

const conf = require('./conf/conf').conf;

async function start() {
    await robots.questions(conf)

}

start();