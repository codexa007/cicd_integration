/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-09 11:29:19
 * Created By  : b.moers
 * Updated On  : 2018-10-09 14:34:56
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=0dc4a3f9db731f0076d6b94ffe961989
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).setUpdateSetStatus(request.pathParams.updateSetSysId);

})(request, response);
