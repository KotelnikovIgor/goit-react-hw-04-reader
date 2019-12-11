import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import s from './Reader.module.css';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ).isRequired,
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { history, location, items } = this.props;
    const publicationIndex = Number(
      new URLSearchParams(location.search).get('item'),
    );

    if (!publicationIndex || +publicationIndex > items.length) {
      history.replace({
        pathname: '/',
        search: 'item=1',
      });
    }
  }

  handleNext = () => {
    const { location, history } = this.props;
    const publicationIndex = Number(
      new URLSearchParams(location.search).get('item'),
    );
    history.replace({
      pathname: location.pathname,
      search: `item=${publicationIndex + 1}`,
    });
  };

  handlePrev = () => {
    const { location, history } = this.props;
    const publicationIndex = Number(
      new URLSearchParams(location.search).get('item'),
    );
    history.replace({
      pathname: location.pathname,
      search: `item=${publicationIndex - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const publicationIndex = Number(
      new URLSearchParams(location.search).get('item'),
    );
    const pageNumber =
      !publicationIndex || publicationIndex > items.length
        ? 1
        : publicationIndex;
    const prevIsActive = pageNumber === 1;
    const nextIsActive = pageNumber >= items.length;

    return (
      <div className={s.reader}>
        <Controls
          handelDisabledNext={nextIsActive}
          handelDisabledPrev={prevIsActive}
          handelClickNext={this.handleNext}
          handelClickPrev={this.handlePrev}
        />

        <Counter index={pageNumber} />
        <Publication
          numberPage={pageNumber}
          title={items[pageNumber - 1].title}
          text={items[pageNumber - 1].text}
        />
      </div>
    );
  }
}

export default Reader;
