angular.module("todoApp",[])
.controller("todoCtrl",['$scope',function($scope){
	$scope.t_lists=[];
	$scope.taskLeft=0;
	$scope.addList=function(){
		if($scope.inputnm){
			var found=false;
			angular.forEach($scope.t_lists,function(item){
				if(item.name==$scope.inputnm && !found){
					found=true;
				}
			})
			if(!found)
			{
				$scope.t_lists.unshift(
					{
						name:$scope.inputnm,
						comp:false
					}
				);
			}
		}
	};
	$scope.setComplete=function(indx){
		if(typeof indx ==="number" && $scope.t_lists[indx])
		{
			$scope.t_lists[indx].comp = $scope.t_lists[indx].comp ? false:true;
		}
	}
	$scope.removeLists=function(indx){
		if(typeof indx==="number")
		{	
			$scope.t_lists.splice(indx,1);
		}
	}
	$scope.checkList=function(){
		var total=0;
		angular.forEach($scope.t_lists,function(item){
			if(!item.comp)
				total++;
		})
		$scope.taskLeft=total;
	}
	$scope.$watch('t_lists',function(){
		$scope.checkList();
	},true)
	$scope.setFilter=function(filt){
		if(typeof filt !=="undefined"){
			console.log("X"+filt)
			$scope.dFilter=filt;
		}
	}
	$scope.cFilter=function(player){
		switch($scope.dFilter){
			case "all":
				return player
			break;
			case "act":
				return !player.comp
			break;
			case "comp":
				return player.comp
			break;
		}
	}
}]);