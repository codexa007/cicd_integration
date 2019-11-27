/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 10:12:12
 * Created By  : b.moers
 * Updated On  : 2018-08-02 11:07:17
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=d6cf0b23db2fd300dfa9b94ffe9619cc
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdAtf(request, response).getExecutionTrackerState();

})(request, response);
