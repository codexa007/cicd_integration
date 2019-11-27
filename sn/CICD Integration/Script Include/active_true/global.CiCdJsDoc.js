/* 
 * Application : CICD Integration
 * ClassName   : sys_script_include
 * Created On  : 2018-12-13 09:57:36
 * Created By  : b.moers
 * Updated On  : 2019-02-28 14:20:04
 * Updated By  : b.moers
 * URL         : /sys_script_include.do?sys_id=d8f74022db9667c076d6b94ffe9619b5
 */
/**
 * Helper Class to control visibility of UI action
 * 
 * @class 
 * @author Boris Moers [b.moers]
 * @memberof global.module:sys_script_include
 */
var CiCdJsDoc = Class.create();
CiCdJsDoc.prototype = /** @lends global.module:sys_script_include.CiCdJsDoc.prototype */ {
    /**
     * Constructor
     * 
     * @returns {undefined}
     */
    initialize: function () {
    },

    /**
     * Helper Function to show/hide button
     * 
     * @param {any} current
     * @returns {boolean} 
     */
    showButton: function (current) {
        if (gs.nil(current) || !current.canWrite())
            return false;

        return (gs.getProperty('cicd-integration.jsdocButton.enabled', 'false') == 'true');
    },

    type: 'CiCdJsDoc'
};
