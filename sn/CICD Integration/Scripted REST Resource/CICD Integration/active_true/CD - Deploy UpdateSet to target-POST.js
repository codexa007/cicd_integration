/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 11:21:45
 * Created By  : b.moers
 * Updated On  : 2018-11-08 05:35:58
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=f6af13ebdb2fd300dfa9b94ffe9619b3
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdDeploy(request, response).deployUpdateSet();

})(request, response);
