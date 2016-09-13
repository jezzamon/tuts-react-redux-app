import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
 
    constructor(props, context) { //1
        super(props, context);
		this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    /***********************************/
    
	redirectToAddCoursePage() {
		browserHistory.push('/course');
	}
    //Render components - ideally they just call components rather than inline here
    render() {
        const {courses} = this.props;
        
        return (
            <div>
                <h1>Courses</h1>
				<input type="submit"
					value="Add Course"
					className="btn btn-primary"
					onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses} />
            </div>
        );
    }
    /******************************************************************************/
} //END COMPONENT CLASS


//setup validation from propTypes
CoursesPage.propTypes = {
//    dispatch: PropTypes.func.isRequired,  //no longer needed with mapDispatchToProps in connect
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
/*******************************/

//REDUX CONNECT AND RELATED FUNCTIONS

//determines what state to map to props
// state.courses is taken from root reducer - reducers/index.js
function mapStateToProps(state,ownProps) {
    return {
      courses: state.courses  
    };
}

//determines what actions are in our component
    //bindActionCreators will go through all the actions in courseActions file and wrap them in a dispatch
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/***************************************/