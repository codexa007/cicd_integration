/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2019-01-17 09:45:37
 * Created By  : b.moers
 * Updated On  : 2019-02-28 14:23:16
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=09d498f9db87af00ee93b14ffe9619f9
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdSource().getHubStatus(request, response);
	
})(request, response);
