/* 
 * Application : CICD Integration
 * ClassName   : sys_script
 * Created On  : 2019-08-30 14:45:25
 * Created By  : b.moers
 * Updated On  : 2019-09-24 10:02:40
 * Updated By  : b.moers
 * URL         : /sys_script.do?sys_id=4d57c452dbe333801af8b14ffe96198b
 */
(function executeRule(current) {
	new global.CiCdRun().sys_remote_update_set_After_IU(current);
})(current);
