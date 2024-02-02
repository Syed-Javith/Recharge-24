import "./Loader.css"
const Loader = () => {
    return (
        <div className="load-container">
            <div className="coast">
                <div className="wave-rel-wrap">
                    <div className="wave"></div>
                </div>
            </div>
            <div className="coast delay">
                <div className="wave-rel-wrap">
                    <div className="wave delay"></div>
                </div>
            </div>
            <div className="text text-R">R</div>
            <div className="text text-e1">e</div>
            <div className="text text-c">c</div>
            <div className="text text-h">h</div>
            <div className="text text-a">a</div>
            <div className="text text-r">r</div>
            <div className="text text-g">g</div>
            <div className="text text-e2">e</div>
        </div>
    )
}

export default Loader;