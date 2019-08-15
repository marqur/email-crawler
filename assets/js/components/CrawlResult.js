//flow
import React, {Component} from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import Loader from 'react-loaders'
import {Table} from 'reactstrap'

let loader = <Loader type="ball-pulse"/>;

class CrawlResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            saved: [],
            crawledData: []
        };
        this.saveData = this.saveData.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.isLoading, this.props.isLoading)) {
            this.setState({
                isLoading: this.props.isLoading,
            })
        }
        if (!isEqual(prevProps.saved, this.props.saved)) {
            this.setState({
                saved: [...this.state.saved, this.props.saved],
            })
        }
        if (!isEqual(prevProps.crawledData, this.props.crawledData)) {
            this.setState({
                crawledData: [...this.state.crawledData, this.props.crawledData]
            })
        }
    }

    saveData(data){
        this.props.saveData(data);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.crawledData.map((item, index) => (
                            <div key={index} className="row pt-3">
                                <div className="col-md-6 offset-md-3 crawl-pane">
                                    <p className="block-title">{item[0].path} {this.state.saved.includes(item[0].path) && <span className="saved">Saved</span>}</p>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>Url</th>
                                            <th>Email</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            item.map((url, urlIndex) => (
                                                    url.title.length > 0 ?
                                                        (url.title.map((email, subindex) => (
                                                                <tr key={subindex}>
                                                                    <td><span className="path">{url.path}</span></td>
                                                                    <td><span className="email">{email}</span></td>
                                                                </tr>
                                                            )
                                                        )) : (
                                                            <tr key={urlIndex}>
                                                                <td><span className="path">{url.path}</span></td>
                                                                <td><span className="path">No Data</span></td>
                                                            </tr>
                                                        )

                                                )
                                            )
                                        }
                                        </tbody>
                                    </Table>
                                    <div className="col-md-12">
                                        <div className="submit-url">
                                            <button onClick={() => this.saveData(item)} type="submit" className="btn btn-primary save-btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
                {this.state.isLoading &&
                <div className="row pt-5">
                    <div className="col-md-6 offset-md-3 crawl-pane">
                        {loader}
                        <div>
                            {this.props.formData &&
                            <p className="loading-text">
                                Crawling data for <strong>{this.props.formData.url}</strong>
                            </p>}
                        </div>
                    </div>
                </div>
                }
            </React.Fragment>

        )
    }


}

CrawlResult.propTypes = {
    isLoading: PropTypes.bool,
    formData: PropTypes.any,
    crawledData: PropTypes.any,
    saveData: PropTypes.func,
    saved: PropTypes.any
};

export default CrawlResult;