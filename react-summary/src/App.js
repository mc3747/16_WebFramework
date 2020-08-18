import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { TabBar } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import Base from "./base/base";
import Tool from "./tool/tool";
import Package from "./package/package";
import Summary from "./summary/summary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      hidden: false,
      fullScreen: true
    };
  }
  returnPage = () => {
    if (this.state.selectedTab == "blueTab") {
      return <Base></Base>;
    } else if (this.state.selectedTab == "redTab") {
      return <Tool></Tool>;
    } else if (this.state.selectedTab == "greenTab") {
      return <Package></Package>;
    } else {
      return <Summary></Summary>;
    }
  };
  // 界面渲染
  renderContent(pageText, bgColor) {
    return (
      <div
        style={{
          backgroundColor: bgColor,
          height: "100%",
          textAlign: "center"
        }}
      >
        {this.returnPage()}
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          {/* 1,基础-base */}
          {
            <TabBar.Item
              title="基础"
              key="Base"
              icon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    background:
                      "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                  }}
                />
              }
              selected={this.state.selectedTab === "blueTab"}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: "blueTab"
                });
              }}
              data-seed="logId"
            >
              {this.renderContent("Base", "#87CEEB")}
            </TabBar.Item>
          }

          {/* 2,工具-tool */}
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="工具"
            key="Tool"
            badge={"new"}
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent("Tool", "#FFB6C1")}
          </TabBar.Item>

          {/* 3,封装-package */}
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="封装"
            key="Package"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            {this.renderContent("Package", "#90EE90")}
          </TabBar.Item>

          {/* 4,总结-summary */}
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="总结"
            key="Summary"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            {this.renderContent("Summary", "#F0E68C")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default App;
