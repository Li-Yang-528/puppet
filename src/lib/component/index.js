import initEvent from './mixin';

function createComponent(name, template) { 
    return {
        name,
        props: {
            item: Object
        },
        render(h) { 
            return template(h, this.item, this)
        }
    }
}

export const Drag = createComponent(
    'a-drag',
    function ( h, node, context ) { 
        return h(
            'div',
            {
                attrs: { draggable: true },
                ...initEvent( 'on', node )
            },
            context.$slots.default
        )
    }
)

export const Drop = createComponent(
    'a-drop',
    renderComponent
);

function renderComponent( h, node ) {
    const {
        name,
        body,
        title,
        slot,
        attrs,
        isWidget,
        data: props,
    } = node;

    return h(
        name,
        {
            slot,
            props,
            ...attrs,
            attrs: { draggable: true },
            ...initEvent( isWidget ? 'nativeOn' : "on", node )
        },
        body.length ? renderChildren( h, body ) : title
    )
}

function renderHtml( h, node ) { 
    const { slot, attrs } = node;
    return h( 'a-drop', {
        slot,
        attrs,
        props: {
            item: node
        }
    })
}

function renderChildren( h, children ) { 
    return children.map( function (child) { 
        if (typeof child === 'string') { 
            return child;
        };

        return child.isWidget
            ? renderComponent( h, child)
            : renderHtml( h, child )
    })
}