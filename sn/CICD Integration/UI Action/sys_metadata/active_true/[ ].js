/* 
 * Application : CICD Integration
 * ClassName   : sys_ui_action
 * Created On  : 2016-04-28 13:28:55
 * Created By  : b.moers
 * Updated On  : 2019-02-28 14:21:30
 * Updated By  : b.moers
 * URL         : /sys_ui_action.do?sys_id=8fcb4a3d37035a0044d3f25b34990eed
 */
if (window) {
	/*
		change the value of all jsDoc buttons on the page and hide them.
	*/
    $j('[data-action-name="snd_add_jsdoc"]').each(function () {
        $j(this).html('<span class="field_decoration icon-template"></span>').hide();
    });

	/*
		add event to wait for the page to be loaded and then check
		if there are any script fields in the page - if so, show the jsDoc buttons.
	*/
    window.addAfterPageLoadedEvent(function () {

        var hasCode = g_form.elements.some(function (field) {
            var value = g_form.getValue(field.fieldName);
            return (value.indexOf('function') !== -1 || value.indexOf('Class') !== -1);
        });
        if (hasCode) {
            $j('[data-action-name="snd_add_jsdoc"]').each(function () {
                $j(this).show();
            });
        }
    });
} 
/**
 * Main function to be called by clicking on the UI button.
 * 
 * @author Boris Moers [b.moers]
 * @requires global.module:sys_script_include.SnSmartComments
 * @memberof global.module:sys_ui_action
 * @returns {undefined}
 */
function commentCode() {

	/**
     * Walk through all form fields and add comments, to be called
     * as callback below.
     * 
     * @param {any} userName
     * @param {any} scope
     * @param {any} objectType
     * @returns {undefined}
     */
    var applyComments = function (userName, scope, objectType) {
        var smart = new SnSmartComments(userName, scope, objectType);
        g_form.elements.forEach(function (field) {
            var fieldName = field.fieldName,
                value = g_form.getValue(fieldName);
            if (!g_form.isDisabled(fieldName) && value && (value.indexOf('function') !== -1 || value.indexOf('Class') !== -1)) {
                console.log("SnSmartComments: commented field '%s'", fieldName);
                g_form.setValue(fieldName, smart.comment(value));
            }
        });
    };

    var objectType = g_form.getTableName(),
        userName = g_user.getFullName().concat(' [').concat(g_user.getUserName()).concat(']'),
        scope = g_scratchpad.scope || 'global';
    
    applyComments(userName, scope, objectType);
}
