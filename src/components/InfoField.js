

import "./InfoField.css"

const InfoField = ({text}) => {

  return (
    <section className="info-field">
        <span className="blue-rec"></span>
        <h2 className="blue-rec-h2">
          {text}
          <span className="dot">_</span>
        </h2>
    </section>
  )
}
export default InfoField