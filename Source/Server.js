
import { join } from 'Path'

import * as Path from './Paths.js'


const { log } = console;



const { listen } = Deno;

export default async function listenForConnections ( options ){
    for await(const connection of listen(options))
        listenForRequests(connection);
}


const { serveHttp } = Deno;

async function listenForRequests ( connection ){
    
    const http = serveHttp(connection);
    
    for await (const exchange of http)
        await handleExchange(exchange);
}


async function handleExchange ( exchange ){
    
    const 
        { request } = exchange ,
        { headers } = request ;
        
    const upgrade = headers.get('upgrade');
    
    const handler = (upgrade)
        ? openWebsocket 
        : handleHTTPRequest ;
        
    const response = 
        await handler(exchange);
    
    exchange.respondWith(response);
}


const { upgradeWebSocket } = Deno;

async function openWebsocket ( exchange ){
    
    log('Upgrading HTTP request -> Websocket');
    
    const { response , socket } = 
        upgradeWebSocket(request);
    
    socket.onopen = () => 
        log('Socket Opened');
    
    socket.onerror = (error) => 
        log('Socket Error',error);
    
    socket.onclose = () => 
        log('Socket Closed');
        
    socket.onmessage = (event) => {
        
        const { data } = event;
        
        log('Socket Message',data); 
    }

    return response;
}


async function handleHTTPRequest ( exchange ){
    
    const { url } = exchange.request;
    
    let { pathname } = new URL(url);
    
    if(pathname === '/')
        pathname = 'index.html';
    
    const path = join(Path.Frontend,decodeURIComponent(pathname));
    
    log('Serving File:',path);
    
      try { return await transferFile(path); } 
    catch { return show404(); }
}


import { contentType } from 'MediaTypes'
import { extname } from 'Path'

const { open } = Deno;

async function transferFile ( path ){
    
    const { readable } = 
        await open(path,{ read : true });

    const headers = new Headers;
    headers.append('content-type',contentType(extname(path)));
    
    const info = { headers };
    
    return new Response(readable,info);
}


function show404 (){
    return new Response('404 Not Found',{ status : 404 });
}
