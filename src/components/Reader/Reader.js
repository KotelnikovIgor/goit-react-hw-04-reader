import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import s from './Reader.module.css';

const getLocationValue = location => {
  const publicationIndex = Number(queryString.parse(location.search).item);
  return publicationIndex;
};

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
    const publicationIndex = getLocationValue(location, items);

    history.replace({
      pathname: location.pathname,
      search: `item=${publicationIndex}`,
    });
  }

  handleNext = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${getLocationValue(location, items) + 1}`,
    });
  };

  handlePrev = () => {
    const { history, location, items } = this.props;
    history.push({
      ...location,
      search: `item=${getLocationValue(location, items) - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const publicationIndex = getLocationValue(location, items);
    const prevIsActive = publicationIndex === 1;
    const nextIsActive = items.length === publicationIndex;
    return (
      <div className={s.reader}>
        <Controls
          handelDisabledNext={nextIsActive}
          handelDisabledPrev={prevIsActive}
          handelClickNext={this.handleNext}
          handelClickPrev={this.handlePrev}
        />
        <Counter index={publicationIndex} />
        <Publication
          numberPage={publicationIndex}
          title={items[publicationIndex - 1].title}
          text={items[publicationIndex - 1].text}
        />
      </div>
    );
  }
}

export default Reader;
