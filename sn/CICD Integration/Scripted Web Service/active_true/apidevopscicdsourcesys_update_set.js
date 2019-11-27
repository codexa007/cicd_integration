/* 
 * Application : CICD Integration
 * ClassName   : sys_web_service
 * Created On  : 2019-01-23 13:38:48
 * Created By  : b.moers
 * Updated On  : 2019-01-30 17:00:52
 * Updated By  : b.moers
 * URL         : /sys_web_service.do?sys_id=12b38c73db8367409775f6700f961914
 */
(function scriptedWebServiceOperation(request, response) {
	
	return new CiCdSource().updateSetSoapWebService(this.soapRequestXML, response);

})(request, response);
