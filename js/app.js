angular.module("start", [])

.controller("control",function ($scope,$http) {
    $scope.videos=null;
    $scope.nextPage='';
    $scope.previousPage='';
    $scope.query="elbakara";

    $scope.history=function () {
        $http.get('historique.json').success(function (data) {
            if(data!==null) {
                $scope.query=data.query;
                $scope.videos=data.videos;
                $scope.nextPage=data.next;
                $scope.previousPage=data.prev;
            }
            else console.log("no data");
        });
    };

    function parseParams(obj) {
        var params = '';
        for (var p in obj) {
            if ((obj.hasOwnProperty(p)) && (obj[p] !== '')) {
                params += '&' + p + '=' + obj[p];
            }
        }
        return params;
    }

    $scope.search=function (query) {

        var API = {
            url: 'https://www.googleapis.com/youtube/v3',
            params: {
                key: 'AIzaSyDXSIfn6pzez5QxldeD-EqpU3hQ2ZO4Pcw',
                maxResults: 3,
                part: 'snippet',
                type: 'video',
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z"
            }
        };
        var url = API.url + '/search/?q=' + query;
        url += parseParams(API.params);

        $http.get(url).success(function (data) {
            $scope.videos=data.items;
            $scope.nextPage=data.nextPageToken;
            $scope.previousPage=data.prevPageToken;
            $http({
                method: 'POST',
                url: 'save.php',
                data: {'query' :$scope.query, 'next': $scope.nextPage,'prev':$scope.previousPage ,'videos': $scope.videos} ,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
            success(function(response) {
                console.log(response.data);
            }).
            error(function(response) {
                console.log("Request failed");
            });
        }).error(function (err) {
            console.log(err);
        });

    };

    function getVideos(API,query) {
        var url = API.url + '/search/?q=' + query;
        url += parseParams(API.params);

        $http.get(url).success(function (data) {
            $scope.videos=data.items;
            $scope.nextPage=data.nextPageToken;
            $scope.previousPage=data.prevPageToken;
        }).error(function (err) {
            console.log(err);
        });
    }

    $scope.next=function () {

        var API = {
            url: 'https://www.googleapis.com/youtube/v3',
            params: {
                key: 'AIzaSyDXSIfn6pzez5QxldeD-EqpU3hQ2ZO4Pcw',
                maxResults: 3,
                part: 'snippet',
                type: 'video',
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z",
                pageToken:$scope.nextPage
            }
        };
        getVideos(API,$scope.query);
    };

    $scope.prev=function () {
        var API = {
            url: 'https://www.googleapis.com/youtube/v3',
            params: {
                key: 'AIzaSyDXSIfn6pzez5QxldeD-EqpU3hQ2ZO4Pcw',
                maxResults: 3,
                part: 'snippet',
                type: 'video',
                order: "viewCount",
                publishedAfter: "2015-01-01T00:00:00Z",
                pageToken:$scope.previousPage
            }
        };
        getVideos(API,$scope.query);
    };
});


