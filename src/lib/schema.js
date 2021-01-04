
import parse from './parse';
export default function getAllComponent() {
    const files = require.context( '@/schema/', true, /[\w+]+\.json$/ );

    return files.keys().map( file => {
        const field = files( file );
        return parse( field )
    } );
}

