/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-08 08:46:34
 * Created By  : b.moers
 * Updated On  : 2018-10-04 14:04:30
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=dfe5f9e1db33db0076d6b94ffe96198a
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdApi(request, response).getUpdateSetDetails(request.pathParams.updateSetSysId);

})(request, response);
