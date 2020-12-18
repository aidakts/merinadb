<img src="https://file.coffee/u/qKRrekJwe9.png" width="200">

*MerinaDB is a fast, responsive and efficient database created to manage data in modern and big applications using a very competent interface.*

## Starting 🚀
*This instructions will allow you to start using MerinaDB easily.*

### Pre-requisites 📋
*You need to install Node.js from [here](https://nodejs.org/)*.

### Installation 🔧
*You can install this package by doing the following command in your console:*
```bash
$ npm install merinadb
```

## Deployment 📦
*Here is an example for using our database system:*
```js
const MerinaClient = require('merinadb')

const db = new MerinaClient.Cluster('merinadb://localhost@root:123456785323') // you can get a cluster in our web

db.connect()

const col = new MerinaClient.Collection('Example Inc.')
col.insertOne({
    document: 'customers',
    key: '1',
    value: 'Murray'
})

let o = col.findOne({
    document: 'customers',
    key: '1'
})

db.end() // if you want, you can close the connection, but it will be automatically closed when you close your project.
```
## Authors ✒
*Thanks to all the people and packages that helped to create this project.*
- **FS** - *Main JSON engine*
- **Chiquicalris** - *Contributed using the package*

## License 📄
This product is under the MIT License.
