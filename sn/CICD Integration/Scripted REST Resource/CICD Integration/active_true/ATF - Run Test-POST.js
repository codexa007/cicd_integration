/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 10:04:07
 * Created By  : b.moers
 * Updated On  : 2018-08-02 11:07:46
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=6bed8babdbebd300dfa9b94ffe9619c6
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdAtf(request, response).executeTest();

})(request, response);
