/**
 * Created by bobo on 2017/5/31.
 */


(function (angular) {
    "use strict";

    /*创建应用导航指令*/

    angular.module('app').directive('nav',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/nav_tpl.html'
        }
    })
})(angular);