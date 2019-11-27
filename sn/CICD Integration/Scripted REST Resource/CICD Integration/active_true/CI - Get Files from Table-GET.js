/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-09 07:24:51
 * Created By  : b.moers
 * Updated On  : 2018-08-09 12:57:16
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=f3cca2b1dbffdb0076d6b94ffe96191e
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	return new CiCdApi(request, response).getFilesFromTable(request.pathParams.tableName);

})(request, response);
