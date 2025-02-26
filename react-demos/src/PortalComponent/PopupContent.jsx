/* eslint-disable react/prop-types */

import {createPortal} from "react-dom"

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
        {copied && (<div style={{position:'absolute', bottom:'5rem'}}>content copied to clipboard</div>)}
    </section>, document.querySelector("#popup-content")
  );
};

export default PopupContent