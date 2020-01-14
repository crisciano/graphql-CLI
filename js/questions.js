const readline = require('readline-sync');

const Questions = (conf) => {
    const { questions } = conf
    const schemas = {};
    let nameSchema; 
    
    conf["projectName"] = QC(questions.basic[0].value)
    
    while(1){
        questions.class.forEach(q => {
            nameSchema = QC(q.value)
            schemas[nameSchema] = []
        });
        while(1){
            let res = Q(questions.attr)
            res = filterJson(res);

            // console.log(res);
            // schemas[nameSchema] = {}
            // console.log(schemas[nameSchema]);

            schemas[nameSchema].push({...res})
            // schemas[nameSchema] = {...schemas[nameSchema], ...res}
            // schemas[nameSchema].assign(...schemas[nameSchema], ...res)


            console.log('Schemas ===>',schemas);

            console.log(conf);




            loopAttr = readline.question(questions.basic[2].value)
            if(loopAttr == 'n'){ break; }
        }
        
        loopClass = readline.question(questions.basic[1].value)
        if(loopClass == 'n'){ break; }
    }

    function Q(questions) {
        let newObj = {};
        questions.forEach(q => {
            newObj[q.key] = readline.question(q.value)
        });
        return newObj
    }

    function QC(value) {
        return readline.question(value)
    }

    function filterJson(res) {

        res.required = res.required === "s" ? true: false
        res.required ? (
                res.type = `${conf.typesAttr[res.type]}!`
            ):(
                res.type = conf.typesAttr[res.type]
            )

        return res
    }
}

module.exports = Questions