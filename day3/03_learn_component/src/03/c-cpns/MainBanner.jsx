import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { banners } = this.props;
    return (
      <div className="banner">
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

MainBanner.propTypes = {
  banners: PropTypes.array,
};

MainBanner.defaultProps = {
  banners: [],
};

export default MainBanner;
