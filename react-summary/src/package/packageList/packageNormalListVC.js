import React, { Component } from 'react';
import { ListView, Button, Icon } from 'antd-mobile';
import ReactDOM from 'react-dom';
import Logo1 from '../../assets/iconfont-1/beiwanglu.svg';
import Logo2 from '../../assets/iconfont-1/liaotian.svg';
import Logo3 from '../../assets/iconfont-1/shipin.svg';
import Logo4 from '../../assets/iconfont-1/wenjianjia.svg';
import Logo5 from '../../assets/iconfont-1/bofangji.svg';
import Logo6 from '../../assets/iconfont-1/lvcheng.svg';
import Logo7 from '../../assets/iconfont-1/shizhong.svg';
import Logo8 from '../../assets/iconfont-1/xiangji.svg';
import Logo9 from '../../assets/iconfont-1/huahua.svg';
import Logo10 from '../../assets/iconfont-1/rijiben.svg';
import Logo11 from '../../assets/iconfont-1/tianqi.svg';
import Logo12 from '../../assets/iconfont-1/youyong.svg';
import Logo13 from '../../assets/iconfont-1/jisuanji.svg';
import Logo14 from '../../assets/iconfont-1/rili.svg';
import Logo15 from '../../assets/iconfont-1/tixingshixiang.svg';
import Logo16 from '../../assets/iconfont-1/yule.svg';
import Logo17 from '../../assets/iconfont-1/kaiguan.svg';
import Logo18 from '../../assets/iconfont-1/shangdian.svg';
import Logo19 from '../../assets/iconfont-1/tongxunlu.svg';
import Logo20 from '../../assets/iconfont-1/zidian.svg';

const SvgLogo = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10,
    Logo11, Logo12, Logo13, Logo14, Logo15, Logo16, Logo17, Logo18, Logo19, Logo20];

const Data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒1',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒2',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒3',
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        if (Data.length > NUM_ROWS) {
            dataBlob[`${ii}`] = JSON.stringify(Data[i]);
        } else {
            dataBlob[`${ii}`] = JSON.stringify(Data[ii % Data.length]);
        };
    };
    // console.log('dataBlob✅' + JSON.stringify(dataBlob));
    return dataBlob;
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    onEndReached = (event) => {

        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );

        const row = (rowData, sectionID, rowID) => {
            console.log('rowData✅' + rowData);
            console.log('rowID✅' + rowID);
            let objectRowData = JSON.parse(rowData);
            return (
                <Button key={rowID} style={{ flexDirection: 'row-reverse', height: '100px' }} icon={<Icon type='right' style={{ marginLeft: '15px', color: 'red' }} />}>

                    <div style={{ display: '-webkit-box', webkitBoxOrient: 'horizontal', height: '100%' }}>
                        <img src={SvgLogo[Number(rowID % SvgLogo.length)]} style={{ cornerRadius: '0px', width: '60px', height: '100px' }} />
                        <div style={{ fontWeight: 'bold', lineHeight: '100px', height: '100px' }}>{objectRowData.des}</div>
                    </div>
                </Button>
            );
        };
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>封装的普通list控制器</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}
