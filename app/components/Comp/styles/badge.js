import Color from 'color';
import helpers from './util/ButtonHelpers';
import $ from './util/variables';

export default {
    base: {
        backgroundColor: $.def,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: $.def,
        color: $.textNormal,
        display: 'inline-block',
        fontWeight: 500,
        fontSize: '9px',
        margin: '0 .3em 0 0',
        lineHeight: 1.33,
        padding: '1px 5px',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        borderRadius: $.bordeRadiusBase
    },
    variant: (type) => {
        if(typeof type !== 'undefined') {
            return (
                {
                    backgroundColor: $[type],
                    color: $.textWhite,
                    borderColor: Color($[type]).darken(0.1).hexString()
                }
            )
        }
    }
};
