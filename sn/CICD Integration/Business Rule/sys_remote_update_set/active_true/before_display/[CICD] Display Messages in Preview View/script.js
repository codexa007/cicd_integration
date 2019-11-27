/* 
 * Application : CICD Integration
 * ClassName   : sys_script
 * Created On  : 2019-08-23 09:19:54
 * Created By  : b.moers
 * Updated On  : 2019-08-30 14:31:57
 * Updated By  : b.moers
 * URL         : /sys_script.do?sys_id=7818f6b7db9f3f408fb6f6700f96199d
 */
(function executeRule(current, previous /*null when async*/) {
	
	new CiCdRun().sys_remote_update_set_Display(current);
	
})(current, previous);
