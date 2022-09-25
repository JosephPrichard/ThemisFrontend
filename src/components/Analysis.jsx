import {useState} from "react";
import {CATEGORIES, JUSTICES} from "../global";
import ChartsDisplay from "./ChartsDisplay";
import NavBar from "./NavBar";

const Analysis = () => {

    const [justice, setJustice] = useState(JUSTICES[0]);
    const [category, setCategory] = useState(CATEGORIES[0]);

    return (
        <div>
            <NavBar/>
            <div className="Chart">
                <div className="Header">
                    <h3>
                        Justice Opinions Over Time
                    </h3>
                    <div className="SelectWrapper">
                        <label htmlFor="justices">Justice: </label>
                        <select
                            className="Select"
                            name="justices"
                            value={justice}
                            onChange={e => setJustice(e.target.value)}
                        >
                            {JUSTICES.map((justice, i) => {
                                return (
                                    <option key={i} value={justice}>{justice}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="SelectWrapper">
                        <label htmlFor="categories">Categories: </label>
                        <select
                            className="Select"
                            name="categories"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            {CATEGORIES.map((category, i) => {
                                return (
                                    <option key={i} value={category}>{category}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <ChartsDisplay
                    justice={justice}
                    category={category}
                />
            </div>
        </div>

    );
}

export default Analysis;