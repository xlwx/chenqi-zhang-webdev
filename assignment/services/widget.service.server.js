module.exports = function(app) {

	var widgets = [
      { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
      { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
      { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
      { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
      { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
      { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" },
      { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ]

    app.post("/api/assignment/page/:pageId/widget", createWidget);
    app.get("/api/assignment/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/assignment/widget/:widgetId", findWidgetById);
    app.put("/api/assignment/widget/:widgetId", updateWidget);
    app.delete("/api/assignment/widget/:widgetId", deleteWidget);

    function createWidget(){}

    function findAllWidgetsForPage(req, res) {
    	var pageId = req.params["pageId"];
    	var target_widgets = [];
    	for(var i in widgets) {
    		if(widgets[i].pageId === pageId) {
    			target_widgets.push(widgets[i]);
    		}
    	}
    	res.json(target_widgets);
    }

    function findWidgetById(req, res) {
        var widgetId = req.params["widgetId"];
        var widget = widgets.find(function(w) {
            return w._id === widgetId;
        });
        res.json(widget);
    }

    function updateWidget(){}

    function deleteWidget(){}

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../public/uploads' });
 
    app.post ("/api/assignment/upload", upload.single('myFile'), uploadImage);
 
    function uploadImage(req, res) {
 
        var widgetId      = req.body.widgetId;
        var width         = req.body.width;
        var myFile        = req.file;
 
        // var userId = req.body.userId;
        // var websiteId = req.body.websiteId;
        // var pageId = req.body.pageId;
 
        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;
 
        // widget = getWidgetById(widgetId);
        var widget = {};
        widget.url = '/uploads/'+filename;
 
        var callbackUrl   = "/#!/user/123/website/890/page/321/widget/345";
 
        // res.redirect(callbackUrl);
    }

};