import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
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
const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 20;
let pageIndex = 0;
let dataBlobs = {};//数据
let sectionIDs = [];//组号
let rowIDs = [];    //列号
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `section_${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `section_${ii}_row_${jj}`;
            rowIDs[ii].push(rowName);

            let length = Data.length
            let index = ii * NUM_ROWS_PER_SECTION + jj;
            let rowData = {};
            if (length > index) {
                rowData = (Data[index]);
            } else {
                rowData = (Data[index % length]);
            };
            dataBlobs[rowName] = JSON.stringify(rowData);
        };

    };
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
    console.log('sectionIDs✅' + sectionIDs)
    console.log('rowIDs✅' + rowIDs)
    console.log('dataBlobs✅' + JSON.stringify(dataBlobs))
}

export default class PackageController extends React.Component {
    constructor(props) {
        super(props);
        // 初始化getSectionData
        const getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        // 初始化getRowData
        const getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };

        const dataSource = new ListView.DataSource({
            getSectionHeaderData: getSectionData,
            getRowData: getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource: dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
                height: hei,
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
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
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
            // console.log('rowData✅' + rowData);
            // console.log('sectionID✅' + sectionID);
            // console.log('rowID✅' + rowID);

            // 序列号后的rowData
            let objectRowData = JSON.parse(rowData);
            let sectionIndex = `${rowID.split('_')[1]}`;
            let rowIndex = `${rowID.split('_')[3]}`;

            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: '#888',
                            fontSize: 18,
                            borderBottom: '1px solid #F6F6F6',
                        }}
                    >{objectRowData.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>

                        <img src={SvgLogo[Number(rowIndex)]} style={{ cornerRadius: '0px', width: '60px' }} />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{objectRowData.des}</div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>封装的sectionList控制器</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderSectionHeader={sectionData => (
                    <div>{`第 ${sectionData.split('_')[1]} 组`}</div>
                )}
                renderRow={row}
                renderSeparator={separator}

                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}
