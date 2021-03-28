import React from "react";

class About extends React.Component {
    render() {
        return (
            <div style={{height: "70vh"}} className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        <h1>Coming Soon</h1>
                        <i style={{fontSize: "300px"}} className="material-icons">precision_manufacturing</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
