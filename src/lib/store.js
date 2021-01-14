import Vue from 'vue';
import { clone } from '@/utils';

const page = {
    name: 'div',
    title: "根页面",
    attrs: {
        style: { height: "100%" }
    },
    path: 'body',
    body: []
}

const Store = Vue.extend( {
    data() {
        return {
            states: {
                page,
                to: null,
                from: null,
                active: null
            }
        }
    },

} );

Store.prototype.mutations = {
    setActive( active ) { 
        this.states.active = active;
    },

    setTo( active ) { 
        this.states.to = active;
    },

    setFrom( active ) { 
        this.states.from = active;
    },

    append() { 
        this.states.to.body.push( clone( this.states.from ) )  
    },

    appendTo(path, active, toIdx, fromIdx) { 
       
    },

    remove(path, active) { 
        const target = this.resolve( path, this.states.page );
        target.splice( target.indexOf(active), 1)
    }
};


Store.prototype.commit = function (name, ...arg) { 
    const mutations = this.mutations;
    mutations[ name ] && mutations[ name ].apply(
        this,
        arg.concat( this.states )
    )
}

export default new Store()