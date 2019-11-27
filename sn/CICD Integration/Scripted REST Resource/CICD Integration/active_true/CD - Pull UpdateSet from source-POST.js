/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2018-08-02 11:24:31
 * Created By  : b.moers
 * Updated On  : 2018-08-09 12:59:44
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=6680a3afdb2fd300dfa9b94ffe961992
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdDeploy(request, response).pullUpdateSet();

})(request, response);
