==========
封装的 alert,confirm 支持 jquery.js和zepto.js , 支持IE8以上浏览器
==========

Alert使用方法：

1.默认样式
$.dtgAlert('这里是提示内容');

2.默认样式自定义标题
$.dtgAlert('这里是提示内容','提示');

3.自定义样式
$.dtgAlert('这里是提示内容','自定义样式提示','dialog-style');

=========

Confirm使用方法：

1.默认样式
$.dtgConfirm('确定吗?',  function(r) {
     $.dtgAlert('结果显示: ' + r, '结果提示');
});

2.默认样式自定义标题
$.dtgConfirm('确定吗?',  function(r) {
     $.dtgAlert('结果显示: ' + r, '结果提示');
},'警告');

3.自定义样式
$.dtgConfirm('确定吗?',  function(r) {
     $.dtgAlert('结果显示: ' + r, '结果提示');
},'警告','dialog-style');

=========

自定义样式例子：

.dialog-style  {background: gray;color: #595959}
.dialog-style  h1  {background: #FFECEC;color: #005AB5}
.dialog-style input  {background: #007aff;color: white;}
