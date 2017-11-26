/*
* @Author: Administrator
* @Date:   2017-11-26 14:40:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-26 16:17:18
*/
var Method = (function (){
  /* 定义的静态变量 */
  var conf = {
    MAX_NUM = 10,
    MIN_NUM = 1
  };

  /* 返回一个取值器 */
  return {
    get : function(name){
      return conf[name] ? conf[name] : null;
    }
  }
}());

/* 获取静态变量 */
var num = Method.get('MAX_NUM'); //10
var num = Method.get('MIN_NUM'); //1