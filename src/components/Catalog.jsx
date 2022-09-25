import {useState} from "react";
import {range} from "../array";
import {CATEGORIES, JUSTICES} from "../global";
import NavBar from "./NavBar";
import Tabloids from "./Tabloids";

const Catalog = () => {

    const [year, setYear] = useState("All");
    const [justice, setJustice] = useState(JUSTICES[0]);
    const [category, setCategory] = useState(CATEGORIES[0]);

    return (
        <div>
            <NavBar>
                <div className="SelectWrapper1">
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
                <div className="SelectWrapper1">
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
                <div className="SelectWrapper1">
                    <label htmlFor="years">Years: </label>
                    <select
                        className="Select"
                        name="years"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    >
                        {["All"].concat(range(2014, 2022)).map((year, i) => {
                            return (
                                <option key={i} value={year}>{year}</option>
                            );
                        })}
                    </select>
                </div>
            </NavBar>
            <Tabloids
                year={year}
                justice={justice}
                category={category}
            />
            <div className="Space"/>
        </div>
    );
}

export default Catalog;