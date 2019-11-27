/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-10-09 14:10:55
 * Created By  : b.moers
 * Updated On  : 2019-01-29 11:05:03
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=8bb25eaddb0dab80432cfc600f961931
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).exportUpdateSet(request.pathParams.updateSetSysId);
	
})(request, response);
