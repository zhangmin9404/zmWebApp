

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