import React  from 'react'
import {Route} from 'react-router-dom'
import Index from '../Index'
import House from '../House'
import Profile from '../Profile'
import {TabBar} from 'antd-mobile'
import './index.css'

export default class HomeIndex extends React.Component {
    state = {
        selectedTab: '/home',

      };

      renderContent(pageText) {
        return (
          <h1>{pageText}</h1>
        );
      }
    
    render() {
        return (
          <div className="home">
            <Route exact path="/home" component={Index}/>
            <Route  path="/home/house" component={House}/>
            <Route  path="/home/profile" component={Profile}/>
          
          <div className="barBox">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <i className="iconfont icon-ind" />
            }
            selectedIcon={
              <i className="iconfont icon-ind" />
            }
            selected={this.state.selectedTab === '/home'}
            onPress={() => {
              this.props.history.push('/home')
              this.setState({
                selectedTab: '/home',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-findHouse" />
            }
            selectedIcon={
              <i className="iconfont icon-findHouse" />
            }
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === '/home/house'}
            onPress={() => {
              this.props.history.push('/home/house')
              this.setState({
                selectedTab: '/home/house',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-my" />
            }
            selectedIcon={
              <i className="iconfont icon-my" />
            }
            title="个人中心"
            key="Friend"
            selected={this.state.selectedTab === '/home/profile'}
            onPress={() => {
              this.props.history.push('/home/profile')
              this.setState({
                selectedTab: '/home/profile',
              });
            }}
          >
          </TabBar.Item>
          </TabBar>
         </div>
                
            </div>
        )
    }
}
