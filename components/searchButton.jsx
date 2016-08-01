import React from 'react';

class SearchBar extends React.Component {
    onButtonClick() {
        alert("You have clicked me!!");
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search your favorite musical" />
                <button onClick={this.onButtonClick}>Go search now!!!</button>
            </div>
        )
    }
}

export default SearchBar;
