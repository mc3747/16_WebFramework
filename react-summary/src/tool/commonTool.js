import CommonTool from "./commonTool"
export default {
    // 随机颜色
    getRandomColorNumber() {
        var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        if (rand.length == 6) {
            return rand;
        } else {
            return CommonTool.getRandomColorNumber();
        }
    },
    getRandomColorString() {
        return '#' + CommonTool.getRandomColorNumber('');
    }
}