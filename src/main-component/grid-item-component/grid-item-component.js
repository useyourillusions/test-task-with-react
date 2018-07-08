import React, { Component } from 'react';

class GridItemComponent extends Component {
    render() {
        const {img, title, link, description} = this.props;

        return (
            <li className="l-examples__item">
                <picture>
                    <source srcSet={img} media="(min-width: 1200px)" />
                    <img className="l-examples__img" src={img} alt={title} />
                </picture>
                <a className="l-examples__link" href={link}>
                    <div className="l-examples__link-info">
                        <h5 className="l-examples__link-title">{title}</h5>
                        <p className="l-examples__link-description">{description}</p>
                    </div>
                    <div className="l-examples__link-icon">
                        <svg className="svg-arrow-right" version="1.2">
                            <use xlinkHref="#svg-arrow-right"/>
                        </svg>
                    </div>
                </a>
            </li>
        )
    }
}
export default GridItemComponent;