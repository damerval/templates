/**
 * Created by pdamerval on 3/3/2017.
 */

var discoveriesSource = {
  dataType: 'json',
  dataFields: [
    { name: "id", type: "int" },
    { name: "discovery", type: "string" },
    { name: "scientist", type: "string" },
    { name: "year", type: "string" },
    { name: "date", type: "date" },
    { name: "YesNo", type: "bool" },
    { name: "Notes", type: 'string' }
  ],
  id: "id",
  url: ""
};

var discoveriesAdapter;

var discoveriesColumns = [
  { text: "Discovery Title", dataField: "discovery", width: 200, editable: false },
  { text: "Discovered By", dataField: "scientist", width: 150, editable: false },
  { text: "Discovered In", dataField: "year", width: 100, editable: false },
  { text: "On", dataField: 'date', cellsFormat: 'MM/dd/yyyy', width: 100, editable: false },
  { text: "Bool", dataField: 'YesNo', columnType: 'checkbox', editable: false }
];

var _basicGrid;

var dropDownSource = ["Albert Einstein", "Niels Bohr"];
var _dropDown;

var _loadButton;
var _UpdateDropDownButton;