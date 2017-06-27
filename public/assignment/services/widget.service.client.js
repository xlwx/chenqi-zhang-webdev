(function() {
	angular.module("WebAppMaker")
	.factory("WidgetService", WidgetService);

	function WidgetService() {
		var widgets = [
			{ "_id": "123", "widgetType": "HEADING", "pageId": "543", "size": 2, "text": "GIZMODO"},
			{ "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
			{ "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
			{ "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
			{ "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
			{ "_id": "678", "widgetType": "YOUTUBE", "pageId": "543", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E" },
			{ "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
		];



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
			var target_widgets = [];
			for(var i = 0; i < widgets.length; i++) {
				if(pageId === widgets[i].pageId) {
					target_widgets.push(widgets[i]);
				}
			}
			return target_widgets;
		}

		function findWidgetById(widgetId) {
			for(var i = 0; i < widgets.length; i++) {
				if(widgetId === widgets[i]._id) {
					return widgets[i];
				}
			}
			return null;
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