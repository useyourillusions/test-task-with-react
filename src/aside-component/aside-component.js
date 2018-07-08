import React, { Component } from 'react';
import NavMainComponent from './nav-main-component/nav-main-component';
import FilterComponent from './filter-component/filter-component';

class AsideComponent extends Component {
    render() {
        return (
            <aside className="document__aside">
                <div className="document__aside-logo">
                    <a className="document__aside-logo-link" href="#">
                        <img className="document__aside-logo-img" src="img/logo.png" title="Home page" alt="logo" />
                    </a>
                </div>
                <NavMainComponent userId='test'/>
                <div className="document__aside-bottom">
                    <div className="b-filter">
                        <h5 className="b-filter__title">
                            <svg className="svg-rectangles" version="1.2">
                                <use xlinkHref="#svg-rectangles"/>
                            </svg>
                            <span>Filter</span>
                        </h5>
                        <FilterComponent/>
                    </div>
                    <p className="document__aside-copyright">© <span>{new Date().getFullYear()}</span> Kappe, All Rights Reserved</p>
                </div>
            </aside>
        );
    }
}

export default AsideComponent;
