import methods from './methods';

export const initEvent = methods;

export function VNode( h, node ) {
    const {
        title,
        name,
        body,
        slot,
        isWidget,
        attrs: config,
        data: props,
    } = node;


    const data = {
        ...config,
        slot,
        props,
        attrs: { draggable: true },
        [ isWidget ? 'nativeOn' : 'on' ]: initEvent( node )
    };

    return h(
        name,
        data,
        body.length ? ChildrenVNode( h, body ) : title
    )
}

export function ChildrenVNode( h, children ) {
    return children.map( function ( child ) {
        return typeof child === 'string'
            ? child
            : VNode( h, child )
    } )
}