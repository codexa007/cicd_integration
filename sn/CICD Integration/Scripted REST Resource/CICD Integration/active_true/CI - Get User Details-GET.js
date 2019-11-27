/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-08 08:23:30
 * Created By  : b.moers
 * Updated On  : 2018-08-09 12:58:09
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=15a0fd61db33db0076d6b94ffe961987
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdApi(request, response).getUserById(request.pathParams.userId);

})(request, response);
