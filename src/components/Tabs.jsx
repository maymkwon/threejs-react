import React, { Component } from 'react';
import Tab from './Tab';

const TabsContext = React.createContext({
  prevActiveTab: {},
  activeTab: {},
});

class Tabs extends Component {
  state = {
    activeTab: '1',
  };
  onClickTab = tab => {
    console.log(tab);
  };
  render() {
    return (
      <TabsContext.Provider
        activeTab={this.state.activeTab}
        value={{
          context: {
            ...this.state,
            onClick: this.onClickTab,
            tabList: ['1', '2'],
          },
        }}
      >
        <TabsContext.Consumer>
          {value => (
            <div>
              {value.context.tabList.map(tabItem => {
                console.log(tabItem);
                return (
                  <Tab
                    title={tabItem}
                    onClick={() => value.context.onClick(tabItem)}
                  />
                );
              })}
              {this.props.children}
            </div>
          )}
        </TabsContext.Consumer>
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
