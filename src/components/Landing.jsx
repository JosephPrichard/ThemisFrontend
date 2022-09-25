import NavBar from "./NavBar";

const Landing = () => {
    return (
        <div className="landingPage">
            <NavBar/>
            <div className="Center">
                <div className="tit">
                    <b>THEMIS</b>
                </div>
                <div className="logo">
                    <img src="logoo.svg" alt="logoo" id="logo" />
                </div>
            </div>
            <div className="textBlocks">
                <div className="statement">
                    <b>Transparent Humanity</b>
                </div>
                <div className="problem">
                    The Supreme Court is a political hotspot. The public's faith in the courts is waning. The American public is growing further from its government. Opinions fill legal and judicial reports. It's impossible to navigate the law with media bias. The situation may be oversimplified or misrepresented in news headlines. The argument lacks subtlety. There are other decisions with as much or more impact as the more famous ones.
                </div>
                <div className="solution">
                    Themis does case analyses. Themis' built-in NLP ensures accurate, unbiased information. Supreme Court and academic institutions are our only sources. SpaCy uses a commercial summarization model. We use tokenization and strategic data mining. We reformat data so it's easier to read. Every case is interactive.
                </div>
            </div>
        </div>
    )
}

export default Landing;