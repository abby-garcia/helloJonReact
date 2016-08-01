import React from 'react';

import Hello from './hello';
import SearchButton from './searchButton';
import Motivation from './motivationLine';
import RandomQuoteGenerator from './quotes';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Motivation/>
                <SearchButton/>
                <RandomQuoteGenerator/>
            </div>
        )
    }
}

export default Main;
