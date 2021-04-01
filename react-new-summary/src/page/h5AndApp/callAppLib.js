import React from 'react';
import CallApp from 'callapp-lib';


const option = {
    // scheme
    scheme: {
        protocol: 'zhihu',
    },
    // 安卓原生谷歌浏览器
    intent: {
        package: 'com.zhihu.android',
        scheme: 'zhihu',
    },
    // iOS的Universal Link
    universal: {
        host: 'oia.zhihu.com/question/270839820/answer/477722658',
        pathKey: 'action',
    },
    // APP 的 App Store 地址
    appstore: 'https://itunes.apple.com/cn/app/id432274380',
    // APP 的应用宝地址
    yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
    // 唤端失败后跳转的地址
    fallback: 'https://oia.zhihu.com/',
    // 超时
    timeout: 2000,
};
const option1 = {
    // scheme
    scheme: {
        protocol: 'bnmotornx',
    },
    // 安卓原生谷歌浏览器
    intent: {
        package: 'com.zhihu.android',
        scheme: 'zhihu',
    },
    // iOS的Universal Link
    universal: {
        host: 'h5sales.qorosauto.com/cert/',
        pathKey: 'path=vehicel&id=19999',
    },
    // APP 的 App Store 地址
    appstore: 'https://itunes.apple.com/cn/app/id1531817744',
    // APP 的应用宝地址
    yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
    // 唤端失败后跳转的地址
    fallback: 'https://h5sales-sit.baonengmotor.com/#/app-introduce',
    // 超时
    timeout: 2000,
};
const lib = new CallApp(option1);

const ua = navigator.userAgent || '';

function evoke(url: string) {
    var iFrame;

    iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', url);
    iFrame.setAttribute('style', 'display:none;');
    iFrame.setAttribute('height', '0px');
    iFrame.setAttribute('width', '0px');
    iFrame.setAttribute('frameborder', '0');
    document.body.appendChild(iFrame);

    iFrame = null;
}

function evokeByLocation(uri: string): void {
    window.location.href = uri;
}

function evokeByTagA(uri: string): void {
    const tagA = document.createElement('a');

    tagA.setAttribute('href', uri);
    tagA.style.display = 'none';
    document.body.append(tagA);

    tagA.click();
}

function App() {
    return (
        <div className="App">
            <button
                onClick={() => {
                    alert(ua);
                }}
            >
                ua
      </button>
            <button
                onClick={() => {
                    evoke('zhihu://');
                }}
            >
                schema - iframe
      </button>
            <button
                onClick={() => {
                    evokeByLocation('zhihu://');
                }}
            >
                schema - location
      </button>
            <button
                onClick={() => {
                    evokeByTagA('zhihu://');
                }}
            >
                schema - A Tag
      </button>
            <button
                onClick={() => {
                    evokeByLocation(lib.generateIntent({ path: '' }));
                }}
            >
                intent - location
      </button>
            <button
                onClick={() => {
                    evokeByLocation('https://flash-link.youku.com');
                }}
            >
                universal-link
      </button>
            <button
                onClick={() => {
                    lib.open({ path: '' });
                }}
            >
                callapp-lib 唤端
      </button>
        </div>
    );
}

export default App;
