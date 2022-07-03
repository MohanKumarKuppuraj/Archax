import React from "react";
import Question from "./../question/question.component";
class RootView extends React.Component {
    render() {
        return (<div>
				<span>Root View is rendered</span>
				<Question></Question>
			</div>);
    }
}
export default RootView;
