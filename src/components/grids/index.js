import React from 'react';
import DateGrid from '../date-grid';

import './index.scss';

class Grids extends React.Component {
  state = {};
  render() {
    const {
      prevMonth,
      currentMonth,
      nextMonth,
      animationClass = '',
      onDateSelect,
      selectedDate1,
      selectedDate2,
      rangeEnabled
    } = this.props;
    return (
      <div className="grids">
        <div className={'animation-helper ' + animationClass}>
          <div className="month prev">
            <DateGrid
              date={prevMonth}
              onDateSelect={onDateSelect}
              selectedDate1={selectedDate1}
              selectedDate2={selectedDate2}
              rangeEnabled={rangeEnabled}
            />
          </div>
          <div className="month current">
            <DateGrid
              date={currentMonth}
              onDateSelect={onDateSelect}
              selectedDate1={selectedDate1}
              selectedDate2={selectedDate2}
              rangeEnabled={rangeEnabled}
            />
          </div>
          <div className="month next">
            <DateGrid
              date={nextMonth}
              onDateSelect={onDateSelect}
              selectedDate1={selectedDate1}
              selectedDate2={selectedDate2}
              rangeEnabled={rangeEnabled}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Grids;
