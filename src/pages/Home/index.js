import React  from 'react'
import {Route} from 'react-router-dom'
import Index from '../Index'
import House from '../House'
import Profile from '../Profile'
import {TabBar} from 'antd-mobile'
import './index.css'
const tabItems = [
  {
    title: '首页',
    path: '/home',
    icon: 'icon-ind'
  },
  {
    title: '找房',
    path: '/home/house',
    icon: 'icon-findHouse'
  },
  {
    title: '我的',
    path: '/home/profile',
    icon: 'icon-my'
  },
]
export default class HomeIndex extends React.Component {
    state = {
        selectedTab: '/home',

      };

      renderContent(pageText) {
        return (
          <h1>{pageText}</h1>
        );
      }
      renderTabBarItems = () =>{
        return (
          tabItems.map((item)=>{
            return (
              <TabBar.Item
              title={item.title}
              key={item.path}
              icon={
                <i className={`iconfont ${item.icon}`} />
              }
              selectedIcon={<i className={`iconfont ${item.icon}`} />}
              selected={this.state.selectedTab === item.path}
              onPress={() => {
                this.props.history.push(item.path);
                this.setState({
                  selectedTab: item.path,
                });
              }}
            />
            )
          })
        )
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
        {
          this.renderTabBarItems()
          }
        

         
          </TabBar>
         </div>
                
            </div>
        )
    }
}
