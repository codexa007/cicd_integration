/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2019-01-29 11:04:44
 * Created By  : b.moers
 * Updated On  : 2019-01-30 11:57:58
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=a72a5229dbdbaf40ee93b14ffe9619bf
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).publishToUpdateSet(request.pathParams.appId);
	
})(request, response);
