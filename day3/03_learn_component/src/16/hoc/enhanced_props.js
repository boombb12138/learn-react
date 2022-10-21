import { PureComponent } from "react";

// 定义组件：给一些需要特殊数据的组件，注入props
function enhancedUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        useInfo: {
          name: "coderwhy",
          level: 99,
        },
      };
    }

    render() {
      return <OriginComponent {...this.state.useInfo} {...this.props} />;
    }
  }
  return NewComponent;
}

export default enhancedUserInfo;
