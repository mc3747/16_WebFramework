import React from 'react'

import "./style.css";

import ReactPullLoad, { STATS } from 'react-pullload'

const loadMoreLimitNum = 2;

const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: cData,
            action: STATS.init,
            index: loadMoreLimitNum //loading more test time limit
        }
    }

    handleAction = (action) => {
        console.info(action, this.state.action, action === this.state.action);
        //new action must do not equel to old action
        if (action === this.state.action ||
            action === STATS.refreshing && this.state.action === STATS.loading ||
            action === STATS.loading && this.state.action === STATS.refreshing) {
            // console.info("It's same action or on loading or on refreshing ",action, this.state.action,action === this.state.action);
            return false
        }

        if (action === STATS.refreshing) {//刷新
            setTimeout(() => {
                //refreshing complete
                this.setState({
                    data: cData,
                    hasMore: true,
                    action: STATS.refreshed,
                    index: loadMoreLimitNum
                });
            }, 3000)
        } else if (action === STATS.loading) {//加载更多
            this.setState({
                hasMore: true
            });
            setTimeout(() => {
                if (this.state.index === 0) {
                    this.setState({
                        action: STATS.reset,
                        hasMore: false
                    });
                } else {
                    this.setState({
                        data: [...this.state.data, cData[0], cData[0]],
                        action: STATS.reset,
                        index: this.state.index - 1
                    });
                }
            }, 3000)
        }

        //DO NOT modify below code
        this.setState({
            action: action
        })
    }

    getScrollTop = () => {
        if (this.refs.reactpullload) {
            console.info(this.refs.reactpullload.getScrollTop());
        }
    }
    setScrollTop = () => {
        if (this.refs.reactpullload) {
            console.info(this.refs.reactpullload.setScrollTop(100));
        }
    }

    render() {
        const {
            data,
            hasMore
        } = this.state

        return (
            <div style={{ background: 'white', margin: 0, padding: 0 }}>
                <ReactPullLoad
                    downEnough={50}
                    ref="reactpullload"
                    className="block"
                    isBlockContainer={true}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    hasMore={hasMore}
                    style={{ paddingTop: 0 }}
                    distanceBottom={1000}>
                    <ul className="test-ul">
                        {
                            data.map((str, index) => {
                                // return <li key={index}><img src={str} alt="" /></li>
                                return <li key={index}>{str}</li>
                            })
                        }
                    </ul>
                </ReactPullLoad>
            </div>
        )
    }
}

export default App