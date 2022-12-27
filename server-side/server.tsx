// import { readFile } from 'fs/promises';
import { join } from 'path';


const file = process.cwd();

const readMe = async () => {
    try {
        const data = await readFile(join(file, 'server-side', './lore.txt'), 'utf-8')
        console.log(data)

    } catch (err) {
        console.log(err);
    }
}
process.on('uncaughtException', err => {
    console.log(`error was caught. ${err}`);
    process.exit(1);

})



readMe()