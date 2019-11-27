/* 
 * Application : CICD Integration
 * ClassName   : sys_script
 * Created On  : 2019-09-12 08:35:47
 * Created By  : b.moers
 * Updated On  : 2019-09-12 08:37:16
 * Updated By  : b.moers
 * URL         : /sys_script.do?sys_id=381f2d1adbb7bfc08fb6f6700f961968
 */
(function executeRule(current, previous /*null when async*/) {
	new global.CiCdRun().sys_app_Display(current);
})(current, previous);
