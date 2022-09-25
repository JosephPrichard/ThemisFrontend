import {useFetch} from "../fetch";
import Tabloid from "./Tabloid";

const Tabloids = (props) => {
    const { data } = useFetch(`/filter?year=${props.year === "All" ? 0 : props.year}&category=${props.category}&justice=${props.justice}`);

    return (
        <div className="Tabloids">
            {data ?
                (data.length > 0 ?
                    (data.map((tabloid, i) => {
                        return (
                            <Tabloid
                                key={i}
                                title={tabloid.title}
                                docket={tabloid.docket}
                                date={tabloid.date}
                                summary={tabloid.shortsum}
                                justices={tabloid.justices}
                                history={tabloid.history}
                            />
                        );
                    }))
                    :
                    <p className="CenteredText">
                        No rulings for this filter. Broaden your search.
                    </p>
                )
                :
                <p className="CenteredText">
                    Loading...
                </p>
            }
        </div>
    );
}

export default Tabloids;