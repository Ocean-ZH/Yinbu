
var myFunction = {
    //获取隐藏元素height
    getHeight(node) {
        var result = node.offsetHeight;
        if (!result || result == 0) {
            node.style['visibility'] = 'hidden';
            node.style['position'] = 'absolute';
            node.style['display'] = 'block';
            result = node.offsetHeight;
            node.style['visibility'] = '';
            node.style['position'] = '';
            node.style['display'] = '';
        }
        return result;
    },
}

export default myFunction;