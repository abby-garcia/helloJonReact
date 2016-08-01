import React from 'react';

class SearchBar extends React.Component {
    onButtonClick() {
      RandomQuoteGenerator();
        // on button click, we need this to call a quotes function so it can appear on the screen!
    }

    render() {
        return (
            <div>
              <button id="quoteButton" onClick={this.onButtonClick}>Get ready to laugh!</button>
            </div>
        )
    }
}

export default SearchBar;
