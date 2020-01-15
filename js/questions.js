'use strict';
// const readline = require('readline-sync');
const inquirer = require('inquirer');

const Questions = async (conf) => {
    const { questions } = conf
    const schemas = []

    await inquirer
            .prompt(questions.projectName)
            .then( async answers => {
                conf = Object.assign(conf, answers)
                await Q(conf)
            });

    async function Q(conf){

        while(1){
            let arr = []
            let obj = {}
            var className = await inquirer
                                    .prompt(questions.className)
                                    .then(answers => (answers))
            let projectName = className.class

            while(1){
                
                var props = await inquirer
                                    .prompt(questions.loop)
                                    .then(answers => (answers))
                arr.push(props)

                var check = await inquirer
                                    .prompt(questions.repeatProps)
                                    .then(answers => (answers))
                if(!check.repeatProps){ break; }
            }

            obj[projectName] = arr 
            schemas.push(obj)

            var check = await inquirer
                                .prompt(questions.repeatClass)
                                .then(answers => (answers))
            if(!check.repeatClass){ break; }
        }

        conf['schemas'] = schemas
    }
}

module.exports = Questions