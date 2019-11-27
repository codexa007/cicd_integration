/* 
 * Application : CICD Integration
 * ClassName   : sys_script
 * Created On  : 2019-02-26 13:58:55
 * Created By  : b.moers
 * Updated On  : 2019-08-30 14:33:53
 * Updated By  : b.moers
 * URL         : /sys_script.do?sys_id=76fd0722dbbbe7409775f6700f9619e3
 */
(function executeRule(current, previous /*null when async*/) {
	
	new CiCdRun().sys_update_set_Before_IU(current, previous);
	
})(current, previous);
