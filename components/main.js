import React from 'react';

import Hello from './hello';
import Motivation from './motivationLine';
import RandomQuoteGenerator from './quotes';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Motivation/>
                <RandomQuoteGenerator/>
            </div>
        )
    }
}

export default Main;
