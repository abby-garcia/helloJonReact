import React from 'react';

import Hello from './hello';
import SearchBar from './searchButton';
import Motivation from './motivationLine';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <SearchButton/>
                <Motivation/>
            </div>
        )
    }
}

export default Main;
