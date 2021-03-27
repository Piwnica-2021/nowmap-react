import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"
import Api from "modules/api";

const SORT_MODE = {
    FEATURED: "Featured",
    RECENT: "Recent",
    NEAR: "Near",
};

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            sorting: SORT_MODE.RECENT,
            myLat: 50.05,
            myLong: 19.95,
        }
    }

    async loadPosts(sorting = null) {
        if (sorting === null)
            sorting = this.state.sorting

        let posts = null;
        switch (sorting) {
            case SORT_MODE.RECENT:
                posts = await Api.getRecent(100);
                break;

            case SORT_MODE.FEATURED:
                break;

            case SORT_MODE.NEAR:
                posts = await Api.getNearest(this.state.myLat, this.state.myLong)
                break;
        }
        return posts === null ? [] : posts;
    }

    componentDidMount() {
        this.loadPosts().then(posts => this.setState({posts: posts}));
    }

    changeSorting = async mode => {
        this.setState({sorting: mode, posts: []});
        let posts = await this.loadPosts(mode);
        this.setState({posts: posts});
    }

    render() {

        return (
            <div className="container-fluid home-container">
                <div className="px-2 mb-2 pt-2 d-flex text-white">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.sorting}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {this.state.sorting !== SORT_MODE.NEAR ?
                                <li><a onClick={() => this.changeSorting(SORT_MODE.NEAR)} className="dropdown-item">Nearest</a></li>
                                : null}

                            {this.state.sorting !== SORT_MODE.RECENT ?
                                <li><a onClick={() => this.changeSorting(SORT_MODE.RECENT)} className="dropdown-item">Recent</a></li>
                                : null}

                            {this.state.sorting !== SORT_MODE.FEATURED ?
                                <li><a onClick={() => this.changeSorting(SORT_MODE.FEATURED)} className="dropdown-item">Featured</a></li>
                                : null}
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Feed posts={this.state.posts} className="feed-container"/>
                    </div>

                    <div className="col">
                        <Map posts={this.state.posts}/>
                    </div>
                </div>

                <div className="full-feed-button">
                    <button>Post</button>
                </div>
            </div>
        );
    }
}

export default Home;
