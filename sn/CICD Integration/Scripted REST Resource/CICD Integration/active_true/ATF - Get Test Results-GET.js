/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 10:09:18
 * Created By  : b.moers
 * Updated On  : 2018-08-02 11:07:32
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=a45f8befdbebd300dfa9b94ffe9619ab
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdAtf(request, response).getTestResults();

})(request, response);
