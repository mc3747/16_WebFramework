import React, { Component } from 'react';
import ColorTool from './toolList/colorTool';
import { getCurrent, getTimeStamp, getDateDiff } from './toolList/dateTool';
import { toLine } from './toolList/stringTool';
import { extripHttps } from './toolList/regexTool';
// import stringTool from './toolList/stringTool';
// import regexTool from './toolList/regexTool';

export default class Tool extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let reg = new RegExp(extripHttps);

        return (
            <div>
                <div style={{
                    color: ColorTool.getRandomColorString()
                }}>1,颜色</div>
                <div>2,日期：{getDateDiff('2019-12-12', '2023-01-01')}</div>
                <div>3,字符串：{toLine('myBestFriend')}</div>
                <div>4,正则：{('https://www.baidu.com').match(reg)}</div>
            </div>

        )
    }
}