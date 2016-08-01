import React from 'react';

import Hello from './hello';
import SearchButton from './searchButton';
import Motivation from './motivationLine';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Motivation/>
                <SearchButton/>
            </div>
        )
    }
}

export default Main;
