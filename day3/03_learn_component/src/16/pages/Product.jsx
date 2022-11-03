import React, { PureComponent } from "react";
import withTheme from "../hoc/with_theme";

export class Product extends PureComponent {
  render() {
    const { color, size } = this.props;
    return (
      <div>
        <h2>
          Product:{color}-{size}
        </h2>
      </div>
    );
  }
}

export default withTheme(Product);
