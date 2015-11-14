import React from 'react';

class HolaComponent extends React.Component {
    _bind(...methods) {
        for (let method of methods) {
            if (this[method]) {
                this[method] = this[method].bind(this);
            }
        }
    }
}

export default HolaComponent;
