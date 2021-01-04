export function clone( obj ) {
    return JSON.parse( JSON.stringify( obj ) )
}

export function makePath(to, from) {
    return to.concat('/', from)
}

export function makeId() { 
    return Number( Math.random().toString().substr( 3, 3 ) + Date.now() ).toString( 36 )
}