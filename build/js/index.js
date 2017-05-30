/**
 * Created by bobo on 2017/5/31.
 */
(function (angular) {
    "use strict";

    /*创建模块*/
    var app= angular.module('app',[]);

    /*创建控制器, 行内式注入*/
    app.controller("appController",['$scope',function ($scope) {
        $scope.name = "今日一刻";
    }])
})(angular);


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


(function (angular) {
    "use strict";

    /*创建应用导航指令*/

    angular.module('app').directive('tabbar',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar_tpl.html'
        }
    })
})(angular);