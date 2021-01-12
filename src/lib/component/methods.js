import store from '../store';

export default function initEvent(node) { 
    return {
        dragstart( e ) {
            e.stopPropagation();
            store.commit(
                'setFrom',
                node
            )
        },

        dragenter( e ) {
            e.stopPropagation();
            e.preventDefault();
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
            e.preventDefault();
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
}