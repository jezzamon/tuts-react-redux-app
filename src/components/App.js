import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container fluid">
                <p>Header here...</p>
                {this.props.children} //the routes go here
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;