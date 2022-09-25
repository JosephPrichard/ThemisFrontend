import {useMemo} from "react";
import { useFetch } from "../fetch";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const X_AXIS = "Year"
const Y_AXIS_YES = "# Yes Opinions"
const Y_AXIS_NO = "# No Opinions"

function chartData(data) {
    if(!data)
        return [];
    return data.map((d) => {
        const o = {};
        o[X_AXIS] = d.year;
        o[Y_AXIS_YES] = 0
        o[Y_AXIS_NO] = 0
        o[Y_AXIS_YES] = d["1"];
        o[Y_AXIS_NO] = (d["-1"] !== undefined ? d["-1"] : 0) + (d["-2"] !== undefined ? d["-2"] : 0)
        return o;
    });
}

const ChartsDisplay = (props) => {

    const { data } = useFetch(`/plot?justice=${props.justice}&category=${props.category}`);

    console.log(data)

    const chart = useMemo(() => chartData(data), [data]);

    return (
        <div>
            <LineChart width={600} height={300} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey={Y_AXIS_YES} stroke="#32CD32" />
                <Line type="monotone" dataKey={Y_AXIS_NO} stroke="#D22B2B" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey={X_AXIS} />
                <YAxis dataKey={Y_AXIS_YES} />
                <YAxis dataKey={Y_AXIS_NO} />
                <Tooltip />
            </LineChart>
        </div>
    );
}

export default ChartsDisplay;