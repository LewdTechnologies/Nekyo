
import Paths from './Paths.js'


const { entries } = Object;


export default function build (){
    
    const data = {
        Categories : 'Utility' ,
        Comment : ' A desktop app to view lewd content.' ,
        Terminal : 'false' ,
        Type : 'Application' ,
        Name : 'Nekyo' ,
        Exec : `nohup ${ Paths.Exec }` ,
        Icon : Paths.Icon ,
        Path : Paths.Data
    }
    
    const parameters = entries(data)
        .map(([ key , value ]) => `${ key }=${ value }`)
        .join('\n');
        
    return `[Desktop Entry]\n${ parameters }`;
}
