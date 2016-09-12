import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
 
    constructor(props, context) { //1
        super(props, context);
    }
    //child functions called by render()
    
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    /***********************************/
    
    //Render components - ideally they just call components rather than inline here
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                
            </div>
        );
    }
    /******************************************************************************/
} //END COMPONENT

//setup validation from propTypes
CoursesPage.propTypes = {
//    dispatch: PropTypes.func.isRequired,  //no longer needed with mapDispatchToProps in connect
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
/*******************************/

//REDUX CONNECT AND RELATED FUNCTIONS

//determines what state to map to props
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