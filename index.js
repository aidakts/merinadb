const fs = require('fs')
const BSON = require('bson')
const { v4: uuidv4 } = require('uuid')
function Cluster(url) {
    u = url

    if(!fs.existsSync('merinadb')){
        fs.mkdirSync('merinadb')
    }
}

Cluster.prototype.connect = function(){
}

function Collection(name){
nm = name
if(!fs.existsSync(`merinadb/${name}`)){
    fs.mkdirSync(`merinadb/${name}`)
}
if (name === undefined) return new TypeError("The collection's name cannot be undefined.")
}

Collection.prototype.insertOne = function(document, schematic){
    let random = uuidv4()
    if(!fs.existsSync(`merinadb/${nm}/${document}.json`)){
        schematic._id = random

    let fc = JSON.stringify(schematic, null, 2)
    fs.writeFileSync(`merinadb/${nm}/${document}.json`, fc)
    }
}

Collection.prototype.findOne = function(ops){
    let col = fs.readFileSync(`merinadb/${nm}/${ops.document}.json`, 'utf-8')
    let fcol = JSON.parse(col)

    return fcol[ops.key]
}

Collection.prototype.findOneById = function (ops){
    let col = fs.readFileSync(`merinadb/${nm}/${ops.document}.json`, 'utf-8')
    let fcol = JSON.parse(col)

    return fcol[ops.key]
}

Collection.prototype.checkOne = function(ops){
    let col = fs.readFileSync(`merinadb/${nm}/${ops.document}.json`, 'utf-8')
    
    let fcol = JSON.parse(col)
    let objf = fcol[ops.key]

    if(objf){
        return true
    } else if (!objf){
        return false
    }
}


Cluster.prototype.end = function(){
    
}
module.exports = {
    Cluster,
    Collection
}
