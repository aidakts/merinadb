const MerinaClient = require('../index')

const db = new MerinaClient.Cluster('merinadb://localhost@root:123456785323') // you can get a cluster in our web

db.connect()

const col = new MerinaClient.Collection('Example Inc.')
col.insertOne('customers',
{ name: 'Robert',
surname: 'A. Cortright',
address: {
    street: '1325 Conference Center Way',
    city: 'Scranton',
    state: 'PA',
    zip: 18503
},
number: '+1 570-878-2815'
})

let o = col.findOne({
    document: 'customers',
    key: 'name'
})
console.log(o)

db.end()