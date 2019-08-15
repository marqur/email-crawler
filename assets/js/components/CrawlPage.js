//flow
import React, {Component} from "react";
import PropTypes from "prop-types";
import {isValidUrl as isValidUrl} from "../helpers/urls";

import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";


class CrawlPage extends Component {

    constructor(props) {
        super(props);

        this.urlRef = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.toggleDepth = this.toggleDepth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            url: "",
            depth: 5,
            profile: "All urls",
            dropdownOpen: false,
            dropdownDepthOpen: false,
            formError: ""
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleDepth() {
        this.setState({
            dropdownDepthOpen: !this.state.dropdownDepthOpen
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const isValid = isValidUrl(this.state.url);
        if(isValid) {
            const data = {
                "url": this.state.url,
                "profile": this.state.profile,
                "depth": this.state.depth
            };
            this.props.onSubmit(data);
        } else {
            this.setState({
                formError: "Please enter valid url (https://example.com/)"
            });
        }

    }

    handleUrlChange(e) {
        this.setState({
            formError: ""
        });

        const el = e.target;
        this.setState({
            url: el.value
        });
    }

    handleDepthChange(depth) {
        this.setState({
            depth: depth
        });
    }

    handleProfileChange(profileInt) {
        const profile = this.getProfile(profileInt);
        this.setState({
            profile: profile
        });
    }

    getProfile(profile) {
        switch (profile) {
            case 1: return "All urls";
            case 2: return "Internal urls";
            case 3: return "Subdomains";
        }
    }


    render() {
        return (
            <form ref={this.urlRef} noValidate={true} onSubmit={ e => {return this.onSubmit(e); } } className="form">

                <div className="row pt-5 pb-5 border-bottom top-menu">
                    <div className="col-md-6 pt-5">
                        <p className="offset-sm-6 col-sm-6 text-justify intro">
                            Type any url and start crawling. You can set crawl profile to look at only specific routes, or choose crawl depth to set how deep to go through web page hierarchically.
                        </p>
                        <p className="offset-sm-6 col-sm-6 text-justify">
                            Api: <span className=" email">api/crawl - depth | profile | url"</span>
                        </p>
                    </div>
                    <div className="col-md-6 pt-5">
                        <div className="form-group row">
                            {/* URL input */}
                            <label htmlFor="url" className="col-sm-10 col-form-label url-label">Website Url:</label>
                            <input onChange={ e => this.handleUrlChange(e) }
                                   type="text" className="form-control col-sm-5 url-input"
                                   name="url" id="url"
                                   required={true}
                                   autoFocus={true}
                                   placeholder="Please enter website url"
                            />
                            <div className="form-error col-sm-12">
                                {this.state.formError}
                            </div>
                            {/* Profile select */}
                            <label htmlFor="url" className="col-sm-10 col-form-label url-label">Crawling profile:</label>
                            <ButtonDropdown className="profile-select" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.profile}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={ e => this.handleProfileChange(1) }>All urls</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleProfileChange(2) }>Internal urls</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleProfileChange(3) }>Subdomains</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>

                            {/* Depth select */}
                            <label htmlFor="url" className="col-sm-10 col-form-label url-label">Crawling depth:</label>
                            <ButtonDropdown className="profile-select" isOpen={this.state.dropdownDepthOpen} toggle={this.toggleDepth}>
                                <DropdownToggle caret>
                                    {this.state.depth}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Maximum five for performance purposes</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleDepthChange(1) }>1</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleDepthChange(2) }>2</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleDepthChange(3) }>3</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleDepthChange(4) }>4</DropdownItem>
                                    <DropdownItem onClick={ e => this.handleDepthChange(5) }>5</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>

                            <div className="col-md-12">
                                <div className="submit-url">
                                    <button type="submit" className="btn btn-primary">Start Crawling ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

CrawlPage.propTypes = {
    onSubmit: PropTypes.func
};

export default CrawlPage;