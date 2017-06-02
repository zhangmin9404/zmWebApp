/**
 * Created by bobo on 2017/5/31.
 */
(function (angular) {
    "use strict";

    /*创建模块 注入路由*/
    var app= angular.module('app',['ui.router']);

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
/**
 * Created by bobo on 2017/6/2.
 */

(function (angular) {

    "use strict";
    /*路由配置*/
    angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
       /*配置主路由*/
       $stateProvider.state('app',{
           url:'/app',
           views:{
               home:{
                   template:'首页'
               },
               author:{
                   template:'作者'
               },
               content:{
                   template:'栏目'
               },
               my:{
                   template:'我的'
               },
           }
       });
        $urlRouterProvider.otherwise('/app');
    }])
})(angular);


(function (angular) {
    "use strict";

    /*创建应用导航指令*/

    angular.module('app').directive('nav',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/nav_tpl.html',
            link:function ($scope,ele,attr) {
               /*监听标题的变化*/
               $scope.$on('titleChange',function (e,args) {
                   // alert(args.title);
                   /*获取标题span  更该标题*/
                   ele.find('span').html(args.title);

                   
               })
            }
        }
    })
})(angular);


(function (angular) {
    "use strict";

    /*创建应用导航指令*/
/*指令里面有个控制器,appController就相当于是父级,控制器里的控制器就是子控制器*/
    angular.module('app').directive('tabbar',function () {
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar_tpl.html',
            // controller:function ($scope) {
            //     $scope.tabbarClick = function (t自己通知父级做事情ype) {
            //      // alert(type);//home content
            //         //子级通知父级 去app中监听通知
            //         $scope.$emit('tabbarChange',{type:type})
            //     }
            // }

            /*我可以不写controller 我在html中写了tabbarClick,那么我就要去声明,我可以在app中声明,以为我们共用一个$scope.所以当子级没有的时候,就会去父级找*/
        }
    })
})(angular);