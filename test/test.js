const MerinaClient = require('../index')

const db = new MerinaClient.Cluster('merinadb://localhost@root:123456785323')

db.connect()

const col = new MerinaClient.Collection('customers')
col.insertOne({
    document: 'customers1',
    key: 'one',
    value: 'Pau'
})

let o = col.findOne({
    document: 'customers1',
    key: 'one'
})
console.log(o)

db.end()