
const { log } = console;


log('Starting File / Socket Server');



import listenForConnections from '../Server.js'


try {
    
    await listenForConnections({ port : 6969 });

} catch ( error ){
    console.error(error);
}


self.postMessage('Done');
