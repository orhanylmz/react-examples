import React from 'react';
import PropTypes from 'prop-types';
import {findClassName} from "../helpers/classHelper";

const Panel = ({panel, onClickBoard}) => {
    console.log(panel)
    return (
        <div className={"gameBoard"}>
            {
                panel.map(line => line.map(
                    item =>
                        <div key={Math.random()} i={item.i} j={item.j} className={findClassName(item)}
                             onClick={onClickBoard}></div>
                ))
            }
        </div>
    );
};

Panel.propTypes = {
    
};

export default Panel;