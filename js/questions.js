const readline = require('readline-sync');

const Questions = (conf) => {
    const { questions } = conf
    const schema = [];
    let c = "";    
    
    while(1){
        questions.class.forEach(q => {
            c = QC(q.value)
            // schema[c] = {}
            schema[c] = []
        });
        while(1){
            let res = Q(questions.attr)
            res = filterJson(res);
            // schema[c] = {...schema[c], ...res} 
            schema[c].push({...res})

            console.log(schema);
            loopAttr = readline.question(questions.basic[1].value)
            if(loopAttr == 'n'){ break; }
        }
        
        loopClass = readline.question(questions.basic[0].value)
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