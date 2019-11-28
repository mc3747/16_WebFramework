import React, { Component } from 'react'
import ReactDOM from 'react-dom'    //下拉刷新组件依赖react-dom，所以需要将其引进来
import { PullToRefresh, ListView } from 'antd-mobile';
const TestCellData = [{

    "name": "测试name1"
}, {

    "name": "测试name2"
}, {

    "name": "测试name3"
}, {

    "name": "测试name4"
}, {

    "name": "测试name5"
}, {

    "name": "测试name6"
}, {

    "name": "测试name7"
}, {

    "name": "测试name8"
}];

class ListContainer extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({  //这个dataSource有cloneWithRows方法
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.pageNo = 0 //定义分页信息
        this.state = {
            dataSource,
            defaultLoading: true,
            refreshing: false,//下拉动画状态
            upLoading: false, //上拉动画状态
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
            hasMore: true
        };
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    componentDidMount() {
        this.onDefaultLoading();
    };

    genData(index) {
        if (index === 1) {
            // 默认刷新数据
        } else if (index === 2) {
            // 下拉刷新数据
        } else if (index === 3) {
            // 上拉刷新数据
        };
        return TestCellData;

    }
    // 默认刷新
    onDefaultLoading = () => {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        this.rData = this.genData(1);
        console.log(this.rData)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            height: hei,
            refreshing: false,
            upLoading: false,
        });
    }

    // 下拉刷新
    onRefresh = () => {
        this.pageNo = 1;
        this.setState({ refreshing: true, upLoading: false });
        setTimeout(() => {
            this.rData = this.genData(2);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                upLoading: false,
            });
        }, 600);
    };
    // 上拉刷新
    onEndReached = (event) => {
        this.pageNo++;
        if (this.state.upLoading && !this.state.hasMore) {
            return;
        }   //如果this.state.hasMore为false，说明没数据了，直接返回
        console.log('reach end', event);
        this.setState({ upLoading: true });
        this.rData = [...this.rData, ...(this.genData(3))];  //每次下拉之后将新数据装填过来
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            upLoading: false,
        });
    };

    render() {
        //这里就是个渲染数据，rowData就是每次过来的那一批数据，已经自动给你遍历好了，rouID可以作为key值使用，直接渲染数据即可
        const row = (rowData, sectionID, rowID) => {
            return (
                <div key={rowID} style={{ "height": "100px", "backgroundColor": "blue" }}>{rowData.name}</div>
            );
        };
        return (
            <div>
                <ListView
                    key={this.state.useBodyScroll ? '0' : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={    //renderFooter就是下拉时候的loading效果，这里的内容可以自己随需求更改
                        () => (
                            <div style={{ padding: 30, textAlign: 'center' }}>
                                {this.state.upLoading ? 'Loading...' : 'Loaded'}
                            </div>
                        )
                    }
                    renderRow={row}   //渲染你上边写好的那个row
                    useBodyScroll={this.state.useBodyScroll}
                    style={this.state.useBodyScroll ? {} : {
                        height: this.state.height,
                        border: '1px solid #ddd',
                        margin: '5px 0',
                        backgroundColor: 'red'
                    }}
                    pullToRefresh={<PullToRefresh
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                    onEndReached={this.onEndReached}
                    pageSize={8}
                />
            </div>
        );
    }
}

export default ListContainer;

