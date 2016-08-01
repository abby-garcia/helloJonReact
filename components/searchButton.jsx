import React from 'react';

class SearchBar extends React.Component {
    onButtonClick() {
        alert("You have clicked me!!");
    }

    render() {
        return (
            <div>
              <button id="quoteButton" onClick={this.onButtonClick}>Get your quote today!</button>
            </div>
        )
    }
}

export default SearchBar;
