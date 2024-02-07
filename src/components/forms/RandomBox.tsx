import Style from "./auth.module.css"
const RandomBox = () => {
  return (
    <div className={Style.drops}>
      <div className={`${Style.drop} ${Style.drop1}`}></div>
      <div className={`${Style.drop} ${Style.drop2}`}></div>
      <div className={`${Style.drop} ${Style.drop3}`}></div>
      <div className={`${Style.drop} ${Style.drop4}`}></div>
      <div className={`${Style.drop} ${Style.drop5}`}></div>
    </div>
  );
}

export default RandomBox