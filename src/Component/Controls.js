import React from "react"

function Controls({nextUser, previousUser}) {
    return (
        <div className="controls">
            <button onClick={previousUser}> &lt; Previous </button>
            <button onClick={nextUser}> Next ></button>

        </div>
    )


}


export default Controls