const fs = require('fs')
function query(string){
    if (string === `INSERT INTO POOL ${n}, DATABASE ${nm} VALUES (${k2}, ${v2})`){

        let col = fs.readFileSync(`myqui/${n}/${nm}.qui`, 'utf-8')
        let fcol = JSON.parse(col)
    
        fcol[k2] = v2
        fs.writeFileSync(`myqui/${n}/${nm}.qui`, JSON.stringify(fcol, null, 2))

    }

    if (string === `SELECT * FROM POOL ${n}, DATABASE ${nm} WHERE KEY = ${k2}`){
        let col = fs.readFileSync(`myqui/${n}/${nm}.qui`, 'utf-8')
        let fcol = JSON.parse(col)
    
        return fcol[k2]
    }

    if (string === `CHECK * FROM POOL ${n}, DATABASE ${nm} WHERE KEY = ${k2}`){
        let col = fs.readFileSync(`myqui/${n}/${nm}.qui`, 'utf-8')
    
        let fcol = JSON.parse(col)
        let objf = fcol[k2]
    
        if(objf){
            return true
        } else if (!objf){
            return false
        }
    }
}

module.exports = query