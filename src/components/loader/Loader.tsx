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
            <div className="up-down-anim text-R">R</div>
            <div className="up-down-anim text-e1">e</div>
            <div className="up-down-anim text-c">c</div>
            <div className="up-down-anim text-h">h</div>
            <div className="up-down-anim text-a">a</div>
            <div className="up-down-anim text-r">r</div>
            <div className="up-down-anim text-g">g</div>
            <div className="up-down-anim text-e2">e</div>
        </div>
    )
}

export default Loader;