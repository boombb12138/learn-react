import { PureComponent } from "react";
// import { StoreContext } from "./StoreContext";
import store from "../store";

export function connect(mapStateToProps, mapDispatchToProps) {
  // 返回高阶组件
  return function (WrapperComponent) {
    class NewCompponent extends PureComponent {
      constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()));
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const stateObj = mapStateToProps(store.getState());
        // /这里要拿的是dispatch函数
        const dispatchObj = mapDispatchToProps(store.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }
    return NewCompponent;
  };
}
