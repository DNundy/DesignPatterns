/*
* @Author: Administrator
* @Date:   2017-11-26 16:16:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-26 16:17:29
*/
var LazySingle = (function (){
  /* 单例实例引用 */
  var _instance = null;

  /* 单例 */
  function Single (){
    return {
      publicMethod : function (){},
      publicProperty : '1.0'
    }
  }

  /* 单例对象接口 */
  return function (){
    if( !_instance ){
      _instance = Single();
    }
    return _instance;
  }
}())