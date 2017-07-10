(function() {
	angular.module("WebAppMaker")
	.factory("WidgetService", WidgetService);

	function WidgetService($http) {

		var api = {
			"createWidget": createWidget,
			"findWidgetsByPageId": findWidgetsByPageId,
			"findWidgetById": findWidgetById,
			'updateWidget': updateWidget,
			"deleteWidget": deleteWidget
		};

		return api;

		function createWidget(pageId, widget) {
			widget.pageId = pageId;
			widgets.push(widget);
		}

		function findWidgetsByPageId(pageId) {
			var url = "/api/assignment/page/" + pageId + "/widget";
			return $http.get(url)
						.then(function(respond) {
							return respond.data;
						});
		}

		function findWidgetById(widgetId) {
			var url = "/api/assignment/widget/" + widgetId;
			return $http.get(url)
						.then(function(respond) {
							return respond.data;
						});
		}

		function updateWidget(widgetId, widget) {
			for(var i = 0; i < widgets.length; i++) {
				if(widgetId === widgets[i]._id) {
					widgets[i] = widget;
				}
			}
		}

		function deleteWidget(widgetId) {
			for(var i = 0; i < widgets.length; i++) {
				if(widgetId === widgets[i]._id) {
					widgets.splice(i,1);
				}
			}
		}

	}
})();