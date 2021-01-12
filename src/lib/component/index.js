import { VNode, initEvent } from './vnode';

export const Drag = {
    name: 'ADrag',

    props: {
        item: Object
    },

    render(h) { 
        return h(
            'div',
            {
                on: initEvent( this.item ),
                attrs: { draggable: true }
            },
            this.$slots.default
        )
    }
}

export const Drop = {
    name: 'ADrop',

    props: {
        data: Object
    },

    render(h) { 
        return VNode(h, this.data)
    }
}