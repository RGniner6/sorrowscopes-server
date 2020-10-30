const fs = require('fs');
const {addSorrowscope} = require("../controllers/sorrowscopeController");

exports.parseText = () => {
    return new Promise(((resolve, reject) => {
        console.log(`Attempting to read txt file...`);
        fs.readFile(`${__dirname}/../assets/seed-data/sorrowscopes.txt`, (err, data) => {
            if (err)  reject(err);
            let obj = [];
            let splitted = data.toString().split("\n");
            for (let i = 0; i<splitted.length; i++) {
                let splitLine = splitted[i].split(/:(.+)/).filter(el => el.length !== 0);
                // console.log(splitLine);
                if (splitLine.length !== 2)
                    continue;
                obj.push({
                    signName: splitLine[0].trim().toLowerCase(),
                    sorrowscope: splitLine[1].trim()
                });
            }
            resolve(obj);
        });
    }));
}

exports.insertToDB = async () => {
    const jsObject = await exports.parseText();
    // console.log(jsObject);
    await addSorrowscope(jsObject);
};

