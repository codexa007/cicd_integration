/* 
 * Application : CICD Integration
 * ClassName   : sys_web_service
 * Created On  : 2019-09-17 23:07:51
 * Created By  : b.moers
 * Updated On  : 2019-09-17 23:07:51
 * Updated By  : b.moers
 * URL         : /sys_web_service.do?sys_id=dcf6e204dbcc0cd09775f6700f96195d
 */
(function scriptedWebServiceOperation(request, response) {
	
	return new CiCdSource().instanceIdWebService(this.soapRequestXML, response);

})(request, response);
