/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    //student_update();
});

function student_update() {
    var $scope = angular.element(xx).scope();
    var app = angular.module('studentInfo', []);
    var studID = 1;
    var url = '';
    var hostserver = 'http://edutech.byethost32.com/';
    var localhost = 'http://edutech/';

    angular.forEach(arr_url, function(value, key){
                    url = hostserver+studID+"/";
                    
                    if (value == 'ovdata' || value == 'report' || value == 'messages') {
                        url += value;
                    }
                    if (value == 'hwork' || value == 'test' || value == 'exam') {
                        url += 'marks/'+value;
                    }
                    
                    $.ajax({
                            type: 'GET',
                            url: url,
                            success: function (response) {
                                alert(response);
                                if (value == 'ovdata') {
                                    /*var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.overviews = arr;  
                                    });*/
                                    $("#ovdata").append(response);
                                }
                                if (value == 'hwork') {
                                    var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.homework = arr;  
                                    });
                                }
                                if (value == 'test') {
                                    var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.tests = arr;  
                                    });
                                }
                                if (value == 'exam') {
                                    var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.exams = arr;  
                                    });
                                }
                                /*if (value == 'report') {
                                    var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.reports = arr;  
                                    });
                                }
                                if (value == 'messages') {
                                    var arr = JSON.parse(response);
                                    $scope.$apply( function (){
                                                 $scope.messages = arr;  
                                    });
                                }*/
                                
                            },
                            error: function (r, textStatus, errorThrown) {
                                var msg = r+' '+textStatus+' '+errorThrown;
                                var title = 'Retrieving student data!';
                                displayModal(title, msg);
                            }


                        });
                });
                
                
                $scope.reports = [
                        {"type":"1_2016",
                            "row":[{"subject":"English","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-up text-success"},
                                {"subject":"Math","min":"34","max":"87","avg":"65","icon":"glyphicon-minus text-warning"},
                                {"subject":"History","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-down text-danger"}
                            ]
                        },
                        {"type":"2_2016",
                            "row":[{"subject":"English","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-up text-success"},
                                {"subject":"Math","min":"34","max":"87","avg":"65","icon":"glyphicon-minus text-warning"},
                                {"subject":"History","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-down text-danger"}
                            ]
                        },
                        {"type":"3_2016",
                           "row":[{"subject":"English","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-up text-success"},
                                {"subject":"Math","min":"34","max":"87","avg":"65","icon":"glyphicon-minus text-warning"},
                                {"subject":"History","min":"34","max":"87","avg":"65","icon":"glyphicon-chevron-down text-danger"}
                            ]
                        }
                       ];     
                $scope.messages = [
                        {"name":"Hilton College VS St Charles Rugby",
                            "id":"1",
                            "location":"Hilton College",
                            "date":"03 July 2017",
                            "time":"10:00 - 17:00",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                        },
                        {"name":"Family fun day",
                            "id":"2",
                            "location":"School Hall",
                            "date":"17 July 2017",
                            "time":"10:00 - 17:00",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                        },
                        {"name":"Price Giving Day",
                            "id":"3",
                            "location":"School Hall",
                            "date":"25 July 2017",
                            "time":"10:00 - 17:00",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                        }
                       ];      
    
}