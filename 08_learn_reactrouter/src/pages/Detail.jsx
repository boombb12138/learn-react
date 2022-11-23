import React, { PureComponent } from "react";
import { withRouter } from "../hoc/index";
export class Detail extends PureComponent {
  // constructor() {
  // }

  render() {
    const { params } = this.props.router;

    return (
      <div>
        <h2>Detail</h2>
        <h2>id:{params.id}</h2>
      </div>
    );
  }
}

export default withRouter(Detail);
