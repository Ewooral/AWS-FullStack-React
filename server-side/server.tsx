import {
    readFile, writeFile, appendFile,
    rename, unlink, mkdir, rmdir
} from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs'


const file = process.cwd();

const readMe = async () => {
    try {
        const data = await readFile(join(file, 'server-side', './lorem.txt'), 'utf-8')
        console.log(data)
        await writeFile(join(file, 'server-side', './write.txt'), 'I am writing this to memory');
        await appendFile(join(file, 'server-side', './write.txt'), '\nI am appending this to memory');
        await rename(join(file, 'server-side', './write.txt'), join(file, 'server-side', './rename.txt'));
        await unlink(join(file, 'server-side', './delete.md'))
        await writeFile(join(file, 'server-side', './delete.md'), 'I am creating a deleted file');

        // create directory
        // if (!existsSync('./server-side/new-Dir')) {

        //     await mkdir('./server-side/new-Dir')
        //     console.log("Directory created!")
        // } else {
        //     console.log("Directory exits")
        // }

        // delete directory
        if (existsSync('./server-side/new-Dir')) {

            await rmdir('./server-side/new-Dir')
            console.log("Directory has been deleted!")
        } else {
            console.log("\nDirectory does not exits")
        }

    } catch (err) {
        console.log(err);
    }
}
process.on('uncaughtException', err => {
    console.log(`error was caught. ${err}`);
    process.exit(1);

})



readMe()