import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add courses</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
            
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursesPage;
