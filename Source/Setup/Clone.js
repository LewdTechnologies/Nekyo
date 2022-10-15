

const { run } = Deno;


export default async function clone ( options ){
    
    const { repository , directory , branch } = options;
    
    const parameters = {
        stdout : 'inherit' ,
        stderr : 'inherit'
    }
    
    parameters.cmd = [
        'git' , 'clone' ,
        '--branch' , branch ,
        repository , directory
    ]
    
    const process = run(parameters);
    
    await process.status();
}