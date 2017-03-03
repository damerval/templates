/**
 * Created by pdamerval on 3/3/2017.
 */

$(document).ready(function () {

  discoveriesAdapter = new $.jqx.dataAdapter(discoveriesSource);

  _basicGrid = $("#basicGrid").jqxGrid({
    source: discoveriesAdapter, columnsresize: true, columns: discoveriesColumns, theme: 'metro'
  });
});