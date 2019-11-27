/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 10:09:55
 * Created By  : b.moers
 * Updated On  : 2018-08-02 11:07:27
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=b97f8befdbebd300dfa9b94ffe9619e8
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdAtf(request, response).getSuiteResults();

})(request, response);
