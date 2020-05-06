import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "semantic-ui-react";

const CustomButton = ({button, onClick}) => {
    return (
        <div key={button.i + button.j} onContextMenu={onClick(button)}>
            <Button
                id={Math.random()}
                className={"btn"}
                disabled={button.clicked}
                onClick={onClick(button)}
                basic={false}
                positive={button.rightClicked}
                negative={button.clicked && button.bombCount === -1}
                content={button.clicked && button.bombCount !== -1 ? button.bombCount : "'" }
            />
        </div>
    );
};

CustomButton.propTypes = {
    
};

export default CustomButton;