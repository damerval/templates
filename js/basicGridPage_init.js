/**
 * Created by Philippe on 3/3/2017.
 */

$(document).ready(function () {

  discoveriesAdapter = new $.jqx.dataAdapter(discoveriesSource);

  _basicGrid = $("#basicGrid").jqxGrid({
    source: discoveriesAdapter, columnsresize: true, columns: discoveriesColumns, theme: 'metro', width: 750
  });

  _dropDown = $("#dropDown").jqxDropDownList({ width: 150, height: 25, theme: 'metro', source: dropDownSource });

  _loadButton = $("#loadButton").jqxButton({ width: 75, height: 25, theme: 'metro' });
  _UpdateDropDownButton = $("#updateDropDownButton").jqxButton({ width: 100, height: 25, theme: 'metro' });

});