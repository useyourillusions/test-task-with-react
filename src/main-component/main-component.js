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
            </main>
        );
    }
}

const mapStateToProps = ({cards}) => ({cards});

export default connect(mapStateToProps)(MainComponent);
