import React, {useState} from 'react';

const Tabloid = (props) => {

    const [showSummary, setShowSummary] = useState(false);
    const [showHistory, setShowHistory] = useState(false);

    return (
        <div className='button-text'>
            <div className='tabloid-box'>
                <div className='top-row'>
                    <h5 id='caseName'>{props.title}</h5>
                    <div id='caseDate'>{props.date}</div>
                    <div id='caseDocket'>{props.docket}</div>
                </div>
                <div className="TitleTabloid">
                    Summary
                </div>
                <div
                    className='summary'
                    style={{
                        height: showSummary ? "fit-content" : 70
                    }}
                >
                    <p id='caseSummary'>
                        {props.summary}
                    </p>
                </div>
                <div className="More" onClick={() => setShowSummary(!showSummary)}>
                    { !showSummary ? "Show More..." : "Show Less..." }
                </div>

                <div className="TitleTabloid">
                    History
                </div>
                <div
                    className='summary'
                                        style={{
                        height: showHistory ? "fit-content" : 70
                    }}
                >
                    <p id='caseSummary'>
                        {props.history}
                    </p>
                </div>
                <div className="More" onClick={() => setShowHistory(!showHistory)}>
                    { !showSummary ? "Show More..." : "Show Less..." }
                </div>

                <div className='justicesName'>
                    {props.justices.map((justice, i) => {
                        return (
                            <div key={i} className='name'>
                                <p>
                                    <b>{ justice.name }</b>
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className='justices'>
                    {props.justices.map((justice, i) => {
                        return (
                            <span className="opinion" key={i}>
                                {justice.opinion === 1 ? <p>&#10004;</p> : <p>&#10006;</p>}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Tabloid;