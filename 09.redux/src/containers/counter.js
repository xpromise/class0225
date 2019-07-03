import { connect } from '../my-react-redux';

import Counter from '../components/counter';
import { increment, decrement } from '../redux/action-creators';

const mapStateToProps = (state) => ({num: state.num});

/*const mapDispatchToProps = (dispatch) => {
  return {
    increment(value) {
      dispatch(increment(value));
    },
    decrement(value) {
      dispatch(decrement(value));
    },
  }
};*/

const mapDispatchToProps = { increment, decrement };

// 向外暴露容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);