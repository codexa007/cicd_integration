/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-12-14 15:47:53
 * Created By  : b.moers
 * Updated On  : 2018-12-14 15:48:09
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=3ad166b2db1ea7c076d6b94ffe961964
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdWebHook(request, response).proxy();

})(request, response);
