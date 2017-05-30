/**
 * Created by Philippe on 3/3/2017.
 */

$(document).ready(function () {

  discoveriesAdapter = new $.jqx.dataAdapter(discoveriesSource);

  discoveriesColumns.push({
    text: "Comments", dataField: 'Notes', width: 200,
    createeditor: function (row, cellvalue, editor, cellText, width, height) {

    }
  });

  _basicGrid = $("#basicGrid").jqxGrid({
    source: discoveriesAdapter, columnsresize: true, columns: discoveriesColumns, theme: 'metro', width: 850, height: 600,
    rowsHeight: 75
  });

  _dropDown = $("#dropDown").jqxDropDownList({ width: 150, height: 25, theme: 'metro', source: dropDownSource });

  _loadButton = $("#loadButton").jqxButton({ width: 75, height: 25, theme: 'metro' });
  _UpdateDropDownButton = $("#updateDropDownButton").jqxButton({ width: 100, height: 25, theme: 'metro' });

});