import CommonTool from "./colorTool";
export default {
    // 随机6位数字
    getRandomColorNumber() {
        var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        if (rand.length == 6) {
            return rand;
        } else {
            return CommonTool.getRandomColorNumber();
        }
    },
    // 随机颜色字符串
    getRandomColorString() {
        return '#' + CommonTool.getRandomColorNumber('');
    }
}