// @flow

import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import CrawlPage from "./components/CrawlPage";
import CrawlResult from "./components/CrawlResult";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
            formData: {},
            crawledData: [],
            saved: ""
        };
        this.formHandler = this.formHandler.bind(this);
        this.saveData = this.saveData.bind(this);

    }

    /**
     * Fetch data for entered url
     * @param formFields
     */
    formHandler(formFields) {
        this.setState({
            isLoading: true,
            formData: formFields

        });

        const self = this;
        axios.post('api/crawl', formFields)
            .then(function (response) {
                self.setState({
                    crawledData: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
            this.setState({
                isLoading: false
            });
        });
    }

    fetchData() {
        const self = this;
        axios.get('api/fetch')
            .then(function (response) {
                self.setState({
                    crawledData: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /**
     * Save data in db for selected url
     * @param data
     */
    saveData(data) {
        const self = this;
        axios.post('api/save', data)
            .then(function (response) {
                console.log(response);
                self.setState({
                    saved: data[0].path
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <CrawlPage onSubmit={this.formHandler}/>
                <CrawlResult saveData={this.saveData} isLoading={this.state.isLoading} formData={this.state.formData}
                             crawledData={this.state.crawledData} saved={this.state.saved}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));