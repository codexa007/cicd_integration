/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2019-09-02 07:59:40
 * Created By  : b.moers
 * Updated On  : 2019-09-02 07:59:40
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=6637ca8fdb6737801af8b14ffe96195d
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).getAppVersion();

})(request, response);
