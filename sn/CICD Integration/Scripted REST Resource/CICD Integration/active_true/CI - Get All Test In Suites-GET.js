/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-08 12:01:35
 * Created By  : b.moers
 * Updated On  : 2018-10-09 14:37:05
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=7f82aa29dbb3db0076d6b94ffe9619af
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).getAllTestInSuites();

})(request, response);
