import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../../actions/filter';

class FilterComponent extends Component {
    filterHandler = (e) => {
        e.preventDefault();
        this.props.applyFilter(e.target.dataset.filter);
    };

    setClass = (filter, section) =>
        `l-nav-filter__link${(filter === section) ? ' _active' : ''}`;

    render() {
        const { filter } = this.props;

        return (
            <ul className="l-nav-filter">
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'all')}
                       onClick={this.filterHandler}
                       data-filter="all">All works</a>
                </li>
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'design')}
                       onClick={this.filterHandler.bind(this)}
                       data-filter="design">Web design</a>
                </li>
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'Illustrations')}
                       onClick={this.filterHandler.bind(this)}
                       data-filter="illustrations">Illustrations</a>
                </li>
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'photography')}
                       onClick={this.filterHandler.bind(this)}
                       data-filter="photography">Photography</a>
                </li>
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'wallpapers')}
                       onClick={this.filterHandler.bind(this)}
                       data-filter="wallpapers">Wallpapers</a>
                </li>
                <li className="l-nav-filter__item">
                    <a href="#"
                       className={this.setClass(filter, 'brochures')}
                       onClick={this.filterHandler.bind(this)}
                       data-filter="brochures">Brochures</a>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = (dispatch) => {
    return {
        applyFilter: (filter) => dispatch(applyFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
