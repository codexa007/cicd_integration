/* 
 * Application : CICD Integration
 * ClassName   : sys_web_service
 * Created On  : 2019-01-23 13:40:47
 * Created By  : b.moers
 * Updated On  : 2019-01-30 17:01:15
 * Updated By  : b.moers
 * URL         : /sys_web_service.do?sys_id=57540cbfdb4367409775f6700f9619c0
 */
(function scriptedWebServiceOperation(request, response) {

	return new CiCdSource().updateSetXmlSoapWebService(this.soapRequestXML, response);

})(request, response);
