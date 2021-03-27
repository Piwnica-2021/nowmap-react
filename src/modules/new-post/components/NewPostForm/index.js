import React from "react";

import Api, {Post} from "modules/api";

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.descInput = React.createRef();
        this.tagsInput = React.createRef();
        this.form = React.createRef();
        this.fileInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        const title = this.titleInput.current.value;
        const desc = this.descInput.current.value;
        const tags = this.tagsInput.current.value;
        const lat = 0;
        const long = 0;

        const postId = await Api.createPost(new Post(title, desc, tags, lat, long));

        const form = this.form.current;
        if (this.fileInput.current.files.length > 0) {
            await Api.uploadImage(postId, form);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} ref={this.form} encType="multipart/form-data">
                    <div>
                        <label>Title</label>
                        <input type="text" ref={this.titleInput} />
                    </div>

                    <div>
                        <label>Description</label>
                        <input type="text" ref={this.descInput} />
                    </div>

                    <div>
                        <label>Tags</label>
                        <input type="text" ref={this.tagsInput} />
                    </div>

                    <div>
                        <label>Image</label>
                        <input type="file" id="file" ref={this.fileInput} />
                    </div>

                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPostForm;
