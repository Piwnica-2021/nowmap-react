import React from "react";
import NewPostForm from "../NewPostForm";

class NewPostPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <NewPostForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPostPage;
