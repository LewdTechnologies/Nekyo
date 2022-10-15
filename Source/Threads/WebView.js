
const { log } = console;


log('Starting WebView');



import { Webview , SizeHint } from 'WebView'

try {
    
    const webview = new Webview(true,{
        height : 600 ,
        width : 900 ,
        hint : SizeHint.MIN
    });
    
    webview.title = '🐾 Ｎｅｋｙｏ 🐾';
    webview.navigate('http://localhost:6969');
    webview.run();

} catch ( error ){
    console.error(error);
}


self.postMessage('Done');
