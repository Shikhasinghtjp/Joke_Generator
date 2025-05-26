import https from 'https';
import chalk from 'chalk';
import { get } from 'http';

const getJoke =() =>{
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response)=>{      //response-object for https.incoming message readable stream that allows to listen to event like data end error
        let data =""
        response.on('data', (chunk) =>{
            data += chunk;
        });
        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(joke);
            console.log(`Here is a random $[joke.type] joke for you:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        });
        response.on('error', (error) => {
            console.log(error);
        });

        })
    
    
}
getJoke();