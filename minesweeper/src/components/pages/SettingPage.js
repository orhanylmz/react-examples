import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Settings from '../Settings'
import {setSettings} from "../../actions/settings";

class SettingPage extends Component {
    state = {
        
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>SETTING PAGE</h1>
                <Settings settings={this.props.settings} setSettings={this.props.setSettings}/>
            </div>
        );
    }
}

SettingPage.propTypes = {
};

const mapStateToProps = ({settings}) => {
    return {
        settings
    }
}

const mapDispatchToProps = {
    setSettings
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);