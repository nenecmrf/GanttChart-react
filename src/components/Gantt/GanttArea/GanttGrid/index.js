import React, {Component} from 'react';
import '../../GanttStyles.scss';
import './GanttGrid.scss';

export default class GanttGrid extends Component {


    render() {

        const {tasks, width} = this.props;
        const {first, last} = this.props.interval;


        return (
            <div className='gantt-grid__wrapper' style={{borderTop: '1px solid #fff', display: 'grid'}}>
                {tasks.map((task, i) => (
                    <div className='gantt-grid__row' key={i}
                         style={{height: '36px', display: 'flex'}}>
                        {this.renderGrid(first, last, width)}

                    </div>
                ))}

            </div>
        );
    }

    renderGrid = (first, last, width) => {

        return (this.props.calcMonthsNumber(first, last).map((month, i) => (
                    this.props.daysInMonth(month.year, month.month).map((day, i) =>
                        <div
                            className={'gantt-grid__cell ' + `${this.isWeekend(new Date(month.year, month.month, day - 1).getDay())}`}
                            key={i} style={{
                            width: `${width}px`,
                        }}>
                        </div>
                    )
                )
            )
        );
    }

    isWeekend = (day) => {

        return ((day === 6 || day === 5) && this.props.zoom === 'day') ? 'weekend' : '';
    };

}