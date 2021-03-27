import React from "react";

import Api, {Post} from "modules/api";

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            titleValid: true
        };

        this.titleInput = React.createRef();
        this.descInput = React.createRef();
        this.tagsInput = React.createRef();
        this.fileInput = React.createRef();
        this.form = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate() {
        const title = this.titleInput.current.value;

        if (title === "") {
            this.setState({titleValid: false});
            this.titleInput.current.focus();
            return false;
        }
        else
        {
            this.setState({titleValid: true});
            return true;
        }
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validate())
            return;

        const title = this.titleInput.current.value;
        const desc = this.descInput.current.value;
        const tags = this.tagsInput.current.value;
        const lat = 0;
        const long = 0;

        const postId = await Api.createPost(new Post(title, desc, tags, lat, long));

        const fileInput = this.fileInput.current;
        if (fileInput.files.length > 0) {
            await Api.uploadImage(postId, fileInput.files[0]);
        }

        this.form.current.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} ref={this.form}>
                <div className="form-floating mb-3">
                    <input className={`form-control ${this.state.titleValid ? "" : "is-invalid"}`} placeholder="Title" type="text" ref={this.titleInput} />
                    <label>Title</label>
                    <div className="invalid-feedback">
                        Must not be empty
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Description" type="text" ref={this.descInput} />
                    <label>Description</label>
                </div>

                <div className="mb-3">
                    <input className="form-control" placeholder="tag1 tag2 tag3..." type="text" ref={this.tagsInput} />
                </div>

                <div className="mb-3">
                    <label className="mb-1">Optional image</label>
                    <input className="form-control" type="file" ref={this.fileInput} />
                </div>

                <div>
                    <input className="btn btn-primary" type="submit" value="Upload" />
                </div>
            </form>
        );
    }
}

export default NewPostForm;
