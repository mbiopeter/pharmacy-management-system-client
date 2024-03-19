import "./Switch.scss";

const Switch = () => {
  return (
    <label className="rocker rocker-small">
        <input type="checkbox"/>
        <span className="switch-left">Yes</span>
        <span className="switch-right">No</span>
    </label>
  )
}

export default Switch
