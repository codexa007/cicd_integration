/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-12-13 07:13:22
 * Created By  : b.moers
 * Updated On  : 2018-12-13 07:13:22
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=2082ef56db1667c076d6b94ffe961972
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).getScopeDetails(request.pathParams.scopeId);

})(request, response);
