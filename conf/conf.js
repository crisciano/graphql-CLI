exports.conf = {
    questions : {
        "projectName": [ 
            {
                type: 'input',
                name: 'projectName',
                message: "Nome do projeto",
                default: function() {
                  return 'teste';
                }
            }
        ],
        "repeatClass":[
            {
                type: 'confirm',
                name: 'repeatClass',
                message: 'Deseja incluir outra class?',
                default: false
            }
        ],
        "repeatProps":[
            {
                type: 'confirm',
                name: 'repeatProps',
                message: 'Deseja incluir outra propriedade?',
                default: false
            }
        ],
        "className": [
            {
                type: 'input',
                name: 'class',
                message: "Nome da Class"
            }
        ],
        "loop": [
            {
                type: 'input',
                name: 'attr',
                message: "Nome do atributo"
            },{
                type: 'checkbox',
                message: 'Tipo do atributo',
                name: 'type',
                choices: [
                    {name:"ID" },
                    {name:"String"},
                    {name:"Float"},
                    {name:"FK"}
                ],
                validate: function(answer) {
                  if (answer.length < 1) {
                    return 'Selecione uma opção.';
                  }
          
                  return true;
                }
            },{
                type: 'confirm',
                name: 'required',
                message: 'Atributo e obrigatorio',
                default: false
            }

        ],
        "attr": [
            {key: 'attr', value: 'Nome do atributo? '},
            {key: 'type', value: 'Tipo do atributo ? (1- ID, 2- String, 3- Float, 4- FK) '},
            {key: 'required', value: 'Atributo e obrigatorio (s/n) ? '}
        ]
    },
    typesAttr: [
        {name:"ID" },
        {name:"String"},
        {name:"Float"},
        {name:"FK"}
    ],
    dir : ['resolvers', 'schema']
}