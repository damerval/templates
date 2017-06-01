/**
 * Created by Philippe on 3/3/2017.
 */

var textFieldRenderer = function(row, column, value) {
  return "<div style='white-space: normal; border: 2px solid red; width: 180px; margin: 4px 0 0 4px; padding: 4px'>"
      + "row: " + row + " - column: " + column + " - value: " + value + "</div>";
};

$(document).ready(function () {

  discoveriesAdapter = new $.jqx.dataAdapter(discoveriesSource);

  discoveriesColumns.push({
    text: "Text Field", dataField: 'Notes', width: 200, cellsRenderer: textFieldRenderer
  });

  _basicGrid = $("#basicGrid").jqxGrid({
    source: discoveriesAdapter, columnsresize: true, columns: discoveriesColumns, theme: 'metro', width: 850, height: 600,
    rowsHeight: 75, editable: true
  });

  _dropDown = $("#dropDown").jqxDropDownList({ width: 150, height: 25, theme: 'metro', source: dropDownSource });

  _loadButton = $("#loadButton").jqxButton({ width: 75, height: 25, theme: 'metro' });
  _UpdateDropDownButton = $("#updateDropDownButton").jqxButton({ width: 100, height: 25, theme: 'metro' });

});