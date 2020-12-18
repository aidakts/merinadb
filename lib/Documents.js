const fs = require('fs')
function createDocument(name){
    nm = name

    if(!fs.existsSync(`myqui/${n}/${nm}.qui`)){
        fs.writeFileSync(`myqui/${n}/${nm}.qui`, '{}')
    }
}

module.exports = createDocument