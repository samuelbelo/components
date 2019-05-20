import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45" 
                    content="Excelent Work!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 4:42" 
                    content="Nice post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane " 
                    timeAgo="Yersterday at 4:45" 
                    content="Keep up with tha good work bruh"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
;}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);