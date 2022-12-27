import fs from 'fs';
import path from 'path';

fs.readFile(path.join(__dirname), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
})