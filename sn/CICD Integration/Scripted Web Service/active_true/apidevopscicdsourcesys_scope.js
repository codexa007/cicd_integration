/* 
 * Application : CICD Integration
 * ClassName   : sys_web_service
 * Created On  : 2019-09-17 21:47:52
 * Created By  : b.moers
 * Updated On  : 2019-09-17 21:47:52
 * Updated By  : b.moers
 * URL         : /sys_web_service.do?sys_id=f8a412c0db8c0cd09775f6700f961932
 */
(function scriptedWebServiceOperation(request, response) {
	
	return new CiCdSource().sysScopeSoapWebService(this.soapRequestXML, response);

})(request, response);
