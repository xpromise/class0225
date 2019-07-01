/*
  容器组件
 */
import { connect } from 'react-redux';
// 引入要包装的UI组件
import Counter from '../components/counter';

import { increment, decrement } from '../redux/action-creators';

// 遍历state，以props的方式传到组件中
// 将store对象中的状态数据，传给UI组件
// state就是store管理的状态数据
const mapStateToProps = (state) => {
  return {
    num: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      const action = increment(value);
      dispatch(action);
    },
    decrement: (value) => {
      dispatch(decrement(value));
    }
  }
};

// connect就是高阶组件
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
*/

// 生成容器组件，暴露出去
export default connect(
  (state) => ({num: state}),
  { increment, decrement }
)(Counter);
