/* 
 * Application : CICD Integration
 * ClassName   : sys_script
 * Created On  : 2019-08-28 09:57:42
 * Created By  : b.moers
 * Updated On  : 2019-08-30 14:35:11
 * Updated By  : b.moers
 * URL         : /sys_script.do?sys_id=d191746ddba3ff409775f6700f96199a
 */
(function executeRule(current, previous /*null when async*/) {
	new global.CiCdRun().sys_update_set_Display(current);
})(current, previous);
