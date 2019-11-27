/* 
 * Application : CICD Integration
 * ClassName   : sys_ws_operation
 * Created On  : 2019-08-29 11:52:38
 * Created By  : b.moers
 * Updated On  : 2019-08-29 11:57:02
 * Updated By  : b.moers
 * URL         : /sys_ws_operation.do?sys_id=18361231db2bb7808fb6f6700f9619ec
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    return new CiCdDeploy(request, response).processUpdateSetDeploySteps();

})(request, response);
