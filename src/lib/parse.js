function parseControls( props = {} ) { 
    const { properties = {} } = props;

    const model = {};

    const defaultValue = {
        array: [],
        string: '',
        object: {},
        boolean: false,
        number: 1
    };

    return [
        model,
        Object.keys( properties ).map( ( key ) => {
            const {
                // 类型
                type,
                // 标题
                title,
                description,
                // 默认值
                default: def,
                // 可选项
                enum: values = [],
                // 可选项label
                enumNames = []
            } = properties[ key ];

            model[ key ] = typeof def !== 'undefined' ? def : defaultValue[ type ];
            return {
                type,
                name: key,
                label: title || description,
                options: toOption( values, enumNames)
            }
        } )
    ];
};

function toOption(values = [], labels = []) { 
    if (!values.length || !labels.length) { 
        return values;
    };

    return values.map( ( key, index ) => ( {
        name: labels[ index ],
        value: key
    }))
}

function parseBody( slot = {}, parent ) { 
    const {
        properties = {},
        type,
        title,
        default: def,
        items = {},
        description
    } = slot;

    const children = [];

    // 默认插槽，如纯文字
    if (type === 'string') { 
        children.push( def || title || description ) 
    };

    // 如果是数组类型意味着子组件均相同，如tabs和tab-pane
    if ( type === 'array' && items ) { 
        children.push( parse( items ) )
    }

    // 如果是对象说明是有具名插槽，分别插入
    if (type === 'object') { 
        Object.keys( properties ).forEach( (name) => { 
            children.push( {
                slot: name,
                ...parse(properties[ name ])
            })
        })
    }
    return children;
}

export default function parse( schema = {} ) {
    const {
        title,
        const: name,
        default: def,
        properties = {}
    } = schema;

    const { props = {}, slot = {} } = properties;
    const [ data, controls ] = parseControls( props );

    return {
        controls,
        data,
        name: name || 'div',
        isWidget: !!name,
        title: title || def,
        body: parseBody( slot )
    }
}