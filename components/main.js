import React from 'react';

import Hello from './hello';
import SearchBar from './searchButton';
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
