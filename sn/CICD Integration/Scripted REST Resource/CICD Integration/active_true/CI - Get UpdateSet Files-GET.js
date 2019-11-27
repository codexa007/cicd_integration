/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-08 09:06:13
 * Created By  : b.moers
 * Updated On  : 2018-10-09 14:38:25
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=4f6a31a9db33db0076d6b94ffe9619fa
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).getUpdateSetFiles(request.pathParams.updateSetSysId);

})(request, response);
