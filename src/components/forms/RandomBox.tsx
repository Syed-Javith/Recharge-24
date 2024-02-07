import FormStyle from "./auth.module.css"
const RandomBox = () => {
  return (
    <div className={FormStyle.drops}>
      <div className={`${FormStyle.drop} ${FormStyle.drop1}`}></div>
      <div className={`${FormStyle.drop} ${FormStyle.drop2}`}></div>
      <div className={`${FormStyle.drop} ${FormStyle.drop3}`}></div>
      <div className={`${FormStyle.drop} ${FormStyle.drop4}`}></div>
      <div className={`${FormStyle.drop} ${FormStyle.drop5}`}></div>
    </div>
  );
}

export default RandomBox