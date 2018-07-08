import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridItemComponent from '../grid-item-component/grid-item-component';
import { cardsLoading } from '../../actions/listCards';
import { getCards } from "../../actions/listCards";

class GridListComponent extends Component {
    componentDidMount() {
        this.props.getCards();
    }

    componentDidUpdate() {
        const images = this.list.getElementsByClassName('l-examples__img');
        [...images].every(img => img.complete) ? this.appearanceWithRotate() : this.waitForPhotosLoaded(images);
    }

    waitForPhotosLoaded(images) {
        const promises = [...images].map(item => {
            return new Promise((resolve, reject) => {
                item.addEventListener('load', resolve);
                //item.addEventListener('load', reject);
            });
        });

        Promise.all(promises).then(() => {
            this.props.loadingProcess(false);
            this.list.classList.add('_animate-opacity');
        });
    }

    appearanceWithRotate() {
        const items = this.list.getElementsByClassName('l-examples__item');

        this.list.classList.remove('_animate-opacity');
        [...items].forEach((li, i) => {
            li.classList.remove('_animate-rotate');
            setTimeout(() => li.classList.add('_animate-rotate'), 100 * i - 10);
        });
    }

    render () {
        const cardsToShow = this.props.cards.data.filter(item =>
            ((this.props.filter === 'all') || (item.filter.indexOf(this.props.filter) > -1)));

        return (
            <ul className="l-examples" ref={(ul) => this.list = ul}>
                {
                    cardsToShow.map((item, i) =>
                        <GridItemComponent key={i}
                                           img={item.img}
                                           title={item.title}
                                           description={item.description}
                                           link={item.link} />
                    )
                }
            </ul>
        )
    }
}

const mapStateToProps = ({filter, cards, isPhotosLoaded}) => ({filter, cards, isPhotosLoaded});

const mapDispatchToProps = (dispatch) => {
    return {
        getCards: () => dispatch(getCards()),
        loadingProcess: (state) => dispatch(cardsLoading(state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridListComponent);