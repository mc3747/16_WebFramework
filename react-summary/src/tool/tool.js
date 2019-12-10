import React, { Component } from 'react';
import colorTool from './toolList/colorTool';
import stringTool from './toolList/stringTool';
import regexTool from './toolList/regexTool';

var dateTool = require('./toolList/dateTool');
export default class Tool extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{
                    color: colorTool.getRandomColorString()
                }}>1,颜色</div>
                <div>2,日期：{dateTool.getCurrent}</div>

            </div>

        )
    }
}