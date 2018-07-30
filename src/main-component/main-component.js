import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridListComponent from './grid-list-component/grid-list-component';
import PantoneComponent from './pantone-component/pantone-component';

class MainComponent extends Component {
    render() {
        return (
            <main className="document__main">
                <GridListComponent/>
                <div className="b-preloader" style={{display: this.props.cards.isCardsLoading ? 'block' : 'none'}}>
                    <div className="b-preloader__inner c1"/>
                    <div className="b-preloader__inner c2"/>
                    <div className="b-preloader__inner c3"/>
                    <div className="b-preloader__inner c4"/>
                </div>
                <PantoneComponent/>
                <div className="b-http-errors" style={{display: this.props.cards.errorData.hasError ? 'block' : 'none'}}>
                    <div className="b-http-errors__inner">
                        <p>An error occurred</p>
                        <p>Status: {this.props.cards.errorData.errorCode}</p>
                        <p>Message: {this.props.cards.errorData.errorMessage}</p>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = ({cards}) => ({cards});

export default connect(mapStateToProps)(MainComponent);
