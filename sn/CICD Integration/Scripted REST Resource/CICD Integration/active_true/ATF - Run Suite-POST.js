/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 10:08:10
 * Created By  : b.moers
 * Updated On  : 2018-08-02 11:07:40
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=881f87efdbebd300dfa9b94ffe961978
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdAtf(request, response).executeSuite();

})(request, response);
