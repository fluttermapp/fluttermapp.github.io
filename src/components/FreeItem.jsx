import styles, { layout } from "../style";
import Button from "./Button";
import { useState } from "react";

const FreeItem = ({ title = 'Default title', description = 'Default description', url = 'Default url', image = image }) => {

  const [val, setVal] = useState('')

  const change = event => {
    setVal(event.target.value)
  }

  return (<section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={image} alt={title} className="w-[75%] h-[100%] relative z-[5] rounded-[20px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfoStart}>
      <h2 className={styles.heading3}>
        {title}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
        • {description}
      </p>
      <div style={{
          height: 20,
        }} />
        <div >
          <input style={{ width: "300px", backgroundColor: '#ebebeb', padding: '0.8rem', borderRadius: '15px' }} placeholder="Email" onChange={change} value={val}></input>
        </div>
      <div className="flex flex-row flex-wrap sm:mt-0 mt-6">
        <Button styles={`mt-10`} label='Get For Free' url={url+val} />
      </div>


    </div>
  </section>)
};

export default FreeItem;
