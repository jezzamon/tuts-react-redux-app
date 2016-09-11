import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
    
    constructor(props, component) {
        super(props,context);
        
        this.state = {
            course: { title: null }
        };
    }
    
    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course: course});
    }
    
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
