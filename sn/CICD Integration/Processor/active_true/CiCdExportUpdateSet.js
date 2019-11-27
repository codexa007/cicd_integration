/* 
 * Application : CICD Integration
 * ClassName   : sys_processor
 * Created On  : 2018-11-08 14:54:55
 * Created By  : b.moers
 * Updated On  : 2018-11-08 15:22:23
 * Updated By  : b.moers
 * URL         : /sys_processor.do?sys_id=b88ab453db6d2b00323efc600f9619fe
 */
(function process(g_request, g_response, g_processor) {

    var CustomExporter = Class.create();
    CustomExporter.prototype = Object.extendsObject(ExportWithRelatedLists, {
        exportRecord: function (record) {
            record = new GlideScriptRecordUtil.get(record).getRealRecord();
            var recordSerializer = new GlideRecordXMLSerializer();
            //recordSerializer.setApplySecurity(true);
            recordSerializer.serialize(record, this.hd, new Packages.java.lang.String('INSERT_OR_UPDATE'));
            if (this.includeAttachments && record.getTableName().substring(0, 14) != "sys_attachment") {
                this.exportAttachments(record);
            }
        }
    });

    var sysid = g_request.getParameter('sysparm_sys_id');
    var exporter = new CustomExporter('sys_remote_update_set', sysid);
    exporter.addRelatedList('sys_update_xml', 'remote_update_set');
    exporter.exportRecords(g_response);

    var del = g_request.getParameter('sysparm_delete_when_done');
    if (del == "true") {
        var ugr = new GlideRecord("sys_remote_update_set");
        ugr.addQuery("sys_id", sysid);
        ugr.query();
        if (ugr.next()) {
            ugr.deleteRecord();
        }
    }

})(g_request, g_response, g_processor);
