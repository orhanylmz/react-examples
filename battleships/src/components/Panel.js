import React from 'react';
import PropTypes from 'prop-types';
import {findClassName} from "../helpers/classHelper";

const Panel = ({panel, onClickBoard}) => {
    return (
        <div className={"gameBoard"}>
            {
                panel.map(line => line.map(
                    item =>
                        <div
                            key={Math.random()}
                            i={item.i}
                            j={item.j}
                            sourceId={item.sourceId}
                            sourceName={item.sourceName}
                            className={findClassName(item.sourceName)}
                            onClick={onClickBoard}
                            onContextMenu={onClickBoard}
                        />
                ))
            }
        </div>
    );
};

Panel.propTypes = {};

export default Panel;