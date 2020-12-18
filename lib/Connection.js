const fs = require('fs')

function connect(){
    if(!fs.existsSync(`myqui/${n}`)){
        fs.mkdirSync(`myqui/${n}`)
    }
}

module.exports = connect