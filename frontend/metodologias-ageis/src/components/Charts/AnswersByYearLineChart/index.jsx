import PropTypes from 'prop-types';
import { LineChart } from '@carbon/charts-react';
import { options, loadingOptions } from './options';
import { formatChartData } from '../../utils/utils';

const AnswersByYearLineChart = ({ loading, data }) => {
    return (
        <div>
            {loading && <LineChart data={[]} options={loadingOptions}/>}
            {!loading && <LineChart data={formatChartData(data)} options={options} />}
        </div>
    )
};

export default AnswersByYearLineChart;

AnswersByYearLineChart.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};