import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"
import Api from "modules/api";
import CreateModal from "../CreateModal"

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
            createModalOn: false,
            sorting: SORT_MODE.RECENT,
            myLat: 50.05,
            myLong: 19.95,
            showMap: true,
            showFeed: true,
            dist: {},
            index: -1,
        };
    }

    loadPosts = async (sorting = null) => {
        if (sorting === null)
            sorting = this.state.sorting

        const dist = await Api.getPostDistance(this.state.myLat, this.state.myLong) || {};
        this.setState({dist: dist});

        let posts = null;
        switch (sorting) {
            case SORT_MODE.RECENT:
                posts = await Api.getRecent();
                break;

            case SORT_MODE.FEATURED:
                posts = await Api.getFeatured(50);
                break;

            case SORT_MODE.NEAR:
                posts = await Api.getNearest(this.state.myLat, this.state.myLong)
                break;
        }
        return posts === null ? [] : posts;
    }

    componentDidMount() {
        this.mql = window.matchMedia("(orientation: landscape)");
        this.handleMediaQuery({matches: this.mql.matches})
        this.mql.addEventListener("change", this.handleMediaQuery);
        this.loadPosts().then(posts => this.setState({posts: posts}));
    }

    handleMediaQuery = e => {
        if (e.matches) {
            this.splitScreen();
        }
        else if (this.state.showFeed && this.state.showMap) {
            this.setState({showFeed: true, showMap: false})
        }
    }

    componentWillUnmount() {
        this.mql.removeEventListener("change", this.handleMediaQuery);
    }

    changeSorting = async mode => {
        this.setState({sorting: mode, posts: []});
        let posts = await this.loadPosts(mode);
        this.setState({posts: posts});
    }

    onCreateModalCall = () => {
        this.setState({createModalOn: !this.state.createModalOn});
    }

    switchMap = () => {
        if (this.state.showFeed) {
            this.setState({showFeed: false, showMap: true});
        } else {
            this.setState({showFeed: true, showMap: false});
        }
    }

    splitScreen = () => {
        this.setState({showFeed: true, showMap: true});
    }

    setCurrentCord = (lat, long, index) => {
      this.setState({
        myLat: lat,
        myLong: long,
        index: index,
      });
    }

    render() {
        return (
            <div className="container-fluid home-container">
                <div className="row">
                    <div className={this.state.showFeed ? "col" : ""}>
                        <div className="px-2 mb-2 pt-2 d-flex text-white">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.state.sorting}
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {this.state.sorting !== SORT_MODE.NEAR &&
                                    <li><a onClick={() => this.changeSorting(SORT_MODE.NEAR)}
                                           className="dropdown-item">Nearest</a></li>
                                    }

                                    {this.state.sorting !== SORT_MODE.RECENT &&
                                    <li><a onClick={() => this.changeSorting(SORT_MODE.RECENT)}
                                           className="dropdown-item">Recent</a></li>
                                    }

                                    {this.state.sorting !== SORT_MODE.FEATURED &&
                                    <li><a onClick={() => this.changeSorting(SORT_MODE.FEATURED)}
                                           className="dropdown-item">Featured</a></li>
                                    }
                                </ul>
                            </div>

                            <div onClick={this.loadPosts} className="ms-auto refresh-button material-icons">refresh</div>

                            {((this.state.showFeed ^ this.state.showMap) === 1) &&
                            <div>
                                <button onClick={this.switchMap} className="btn btn-secondary">
                                    {this.state.showMap ? "Feed" : "Map"}
                                </button>
                            </div>}
                        </div>

                        {this.state.showFeed && <Feed dist={this.state.dist} posts={this.state.posts} className="feed-container" setCurrentCord={this.setCurrentCord}/>}
                    </div>

                    {this.state.showMap &&
                    <div className="col">
                        <Map posts={this.state.posts} lat={this.state.myLat} long={this.state.myLong} index={this.state.index}/>
                    </div>}
                </div>

                <div className="full-feed-button">
                    <button onClick={this.onCreateModalCall} className="material-icons">add</button>
                </div>

                {
                    this.state.createModalOn &&
                    <CreateModal
                        createModalOn={this.state.createModalOn}
                        onCreateModalCall={this.onCreateModalCall}/>
                }

            </div>
        );
    }
}

export default Home;
