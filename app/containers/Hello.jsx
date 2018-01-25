import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userInfoActions from '../actions/userinfo'
import pureRenderMinin from 'react-addons-pure-render-mixin'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component {
    constructor(props) {
      super(props);  
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        num: 123
      };
    }
    render() {
        return (
            <div>
                <input value={this.state.num} onChange={this.change.bind(this)} />
                <div style={{height:'30px'}}>{this.state.num}</div>

                <p onClick={this.update.bind(this)}>hello修改</p>
                <hr/>
                <A userinfo={this.props.userInfo}/>
                <hr/>
                <B userinfo={this.props.userInfo}/>
                <hr/>
                <C actions={this.props.userInfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆 第四步
        this.props.userInfoActions.login({
            userid: '张洋',
            city: '北京'
        })
    }
    update() {
        this.props.updateUser({
            userid: '张三',
            city: '无锡'
        })
    }   
    change(event) {
        this.setState({
            num : event.target.value
        })
    }
}
function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
        updateUser: (data) => {
            dispatch({
                type: 'USER_LOGIN',
                data
            })
        } 
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)