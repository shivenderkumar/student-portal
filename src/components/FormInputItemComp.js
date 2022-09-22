import { useState } from "react";
import "../styles/FormInputItemComp.css"

function FormInputItemComp(props){
    const [keyVal, setkeyVal] = useState("");

    return(
        <div className="form-input-item-container">
            <div>
            <label for="item">{props.lableName}</label>
            </div>
            <div>
                <input type="text" value={keyVal} onChange={(e)=>{ setkeyVal(e.target.value);}} />
            </div>
        </div>
    );
}

export default FormInputItemComp;