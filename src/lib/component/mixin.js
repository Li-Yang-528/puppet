import store from '../store';

export default function ( type = 'nativeOn', node ) {
    const event = {};
    event[ type ] = {
        dragstart( e ) {
            e.stopPropagation();
            store.commit(
                'setFrom',
                node
            )
        },

        dragenter( e ) {
            e.stopPropagation();
            store.commit(
                'setTo',
                node
            )
        },

        dragleave( e ) {
            e.stopPropagation();
            e.preventDefault();
        },

        dragover( e ) {
            e.stopPropagation();
            e.preventDefault();
        },

        drop( e ) {
            e.stopPropagation();
            store.commit(
                'append'
            )
        },

        click() {
            store.commit(
                'click',
                node
            )
        }
    }
    return event;
}
