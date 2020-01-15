class Helper {
    getFileContent(file, content) {

        let fileContent;

        if(file == "package")
            fileContent = this.getPackage(content)
        if(file == "index")
            fileContent = this.getIndex()
        if(file == "schema")
            fileContent = this.getSchema(content)
        if(file == "resolvers")
            fileContent = this.getResolvers(content)

        return fileContent
    }

    getPackage(content) {
        var package = {
            "name": content.projectName,
            "version": "1.0.0",
            "description": content.projectName,
            "main": "index.js",
            "author": "crisciano <criscianosb2@live.com>",
            "scripts": {
              "start": "nodemon index.js"
            },
            "dependencies": {
              "graphql-yoga": "^1.18.3",
              "nodemon": "^2.0.1"
            }
        }

        return JSON.stringify(package, null, 4);

    }

    getIndex(){
        return `
            const { GraphQLServer } = require('graphql-yoga')
            const resolvers = require('./resolvers/resolvers')

            const server = new GraphQLServer({ 
                typeDefs: './schema/schema.graphql', 
                resolvers 
            })

            server.start(
                () => console.log('Server is running on localhost:4000')
            )
        `
    }

    getSchema({schemas}) {

    }

    getResolvers({schemas}) {

        return `
            module.exports = {
                Query: {
                    // query test
                    status: () => "Servidor rodando!",
            
                    // query client
                    getClient : (root, {id}) => Clients.getById(id),
                    clients: () => Clients.list(),
            
                    // query pet
                    getPet : (root, {id}) => Pet.getById(id),
                    pets: () => Pet.list(),
            
                    // query services
                    getService : (root, {id}) => Services.getById(id),
                    services: () => Services.list(),
            
                    // query calls
                    getCall : (root, {id}) => Calls.getById(id),
                    calls: () => Calls.list()
            
            
                },
                Mutation: {
                    // actions client
                    addClient: (root, params) => Clients.add(params),
                    updateClient: (root, params) => Clients.update(params),
                    deleteClient: (root, {id}) => Clients.delete(id),
            
                    // actions pet
                    addPet: (root, params) => Pet.add(params),
                    updatePet: (root, params) => Pet.update(params),
                    deletePet: (root, {id}) => Pet.delete(id),
            
                    // actions services
                    addService: (root, params) => Services.add(params),
                    updateService: (root, params) => Services.update(params),
                    deleteService: (root, {id}) => Services.delete(id),
            
                    // actions services
                    addCall: (root, params) => Calls.add(params),
                    updateCall: (root, params) => Calls.update(params),
                    deleteCall: (root, {id}) => Calls.delete(id),
            
                }
            }
        ` 

    }

    getServices(className) {

        return `
            class ${className} {
                list() {
                // return new promise response
                }
            
                getById(id) {
                // return new promise response
                }
            
                add(item) {
                // return new promise response
                }
            
                update(novoItem) {
                // return new promise response
                }
            
                delete(id) {
                // return new promise response
                }
            }
            module.exports = new ${className}
        `
    }
}