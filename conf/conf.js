exports.conf = {
    questions : {
        "basic": [ 
            {value: 'Nome do projeto? '},
            {value: 'Deseja incluir outra class (s/n)? '},
            {value: 'Deseja incluir outra propriedade (s/n)? '},
        ],
        "class" : [
            {key: 'class', value: 'Nome da Class? '},
        ],
        "attr": [
            {key: 'attr', value: 'Nome do atributo? '},
            {key: 'type', value: 'Tipo do atributo ? (1- ID, 2- String, 3- Float, 4- FK) '},
            {key: 'required', value: 'Atributo e obrigatorio (s/n) ? '}
        ]
    },
    typesAttr: ["ID", "String", "Float", "FK"],
    dir : ['resolvers', 'schema']
}