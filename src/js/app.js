/**
 * Created by bobo on 2017/5/31.
 */
(function (angular) {
    "use strict";

    /*创建模块*/
    var app= angular.module('app',[]);

    /*创建控制器, 行内式注入*/
    app.controller("appController",['$scope',function ($scope) {
        /*记录当前点击的标题*/
        $scope.name = "今日一刻";
        //监听通知
        // $scope.$on('tabbarChange',function ($event,attr) {
        //     alert(attr.type);
        //     /*发送广播*/
        //     $scope.$broadcast('titleChange',)
        //
        // })

        /*记录当前点击的类型*/
        $scope.type= "home";
        /*导航标题 */
        var title= '今日一刻';

        /*监听tabbar点击  这种就省去了上面的繁琐步骤*/
        $scope.tabbarClick = function (type) {
            // alert(type);
            $scope.type = type;
            switch(type){
                case 'home':
                title = '今日一刻';
                break;
                case 'author':
                    title = '作者';
                    break;
                case 'content':
                    title = '栏目';
                    break;
                case 'my':
                    title = '我的';
                    break;

            }

            /*发通知,改标题*/
            $scope.$broadcast('titleChange',{type:type,title:title})
        };

    }])
})(angular);