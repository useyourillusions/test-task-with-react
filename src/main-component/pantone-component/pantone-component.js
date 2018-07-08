import React, { Component } from 'react';
import { connect } from 'react-redux';

class PantoneComponent extends Component {
    componentDidMount() {
        this.bPantone.onclick = (e) => e.currentTarget.classList.toggle('_active');
        this.colors = [...this.bPantone.getElementsByClassName('l-colors__item')];
        this.colorSchemeClass = localStorage.getItem('colorScheme') || null;
        this.applyScheme();
    }

    applyScheme = (e) => {
        if (!this.colorSchemeClass) {
            this.colorSchemeClass = 'color-scheme-default';
        } else if (e) {
            const pantoneParent = this.bPantone.parentNode,
                colorFlash = document.createElement('div');
                colorFlash.classList.add('b-pantone__flash');

            pantoneParent.appendChild(colorFlash);
            setTimeout(() => colorFlash.remove(), 400);

            this.colorSchemeClass = e.target.dataset.scheme;
            this.colors.reduce((delay, li) => {
                if (li !== e.target) {
                    delay += 0.05;
                    li.setAttribute('style', `transition-delay: ${delay}s`);
                } else {
                    li.setAttribute('style', `transition-delay: 0s`);
                }
                return delay;
            }, 0);

            setTimeout(() =>
                this.colors.forEach((li, i) => li.setAttribute('style', `transition-delay: ${i * 0.05}s`)),
                250
            );
        }

        localStorage.setItem('colorScheme', this.colorSchemeClass);
        document.body.removeAttribute('class');
        document.body.classList.add(this.colorSchemeClass);
    };

    render () {
        return (
            <div className="b-pantone"
                 title="Choose color scheme"
                 ref={div => this.bPantone = div}>
                <svg className="svg-pantone" version="1.2">
                    <use xlinkHref="#svg-pantone"/>
                </svg>
                <ul className="l-colors">
                    <li className="l-colors__item"
                        data-scheme="color-scheme-default"
                        onClick={this.applyScheme}
                        style={{transitionDelay : '0s'}} />
                    <li className="l-colors__item"
                        data-scheme="color-scheme-green"
                        onClick={this.applyScheme}
                        style={{transitionDelay : '0.05s'}} />
                    <li className="l-colors__item"
                        data-scheme="color-scheme-teal"
                        onClick={this.applyScheme}
                        style={{transitionDelay : '0.1s'}}/>
                </ul>
            </div>
        )
    }
}

export default connect()(PantoneComponent);