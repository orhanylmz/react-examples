import React, {Component} from 'react';
import DotLoader from "react-spinners/DotLoader";
import {css} from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoaderHOC = (WrappedComponent, field) => {
    return class LoaderHOC extends Component {
        render() {
            return (this.props[field] == null || this.props[field].length === 0)
             ?
                <DotLoader
                    css={override}
                    size={50}
                    color={"#333333"}
                    loading={true}
                />
                :
                <WrappedComponent {...this.props}/>;
        }
    }
};

export default LoaderHOC;