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
  { text: "Discovery Title", dataField: "discovery", width: 200 },
  { text: "Discovered By", dataField: "scientist", width: 150 },
  { text: "Discovered In", dataField: "year", width: 100 },
  { text: "On", dataField: 'date', cellsFormat: 'MM/dd/yyyy', width: 100 },
  { text: "Bool", dataField: 'YesNo', columntype: 'checkbox' }
];

var _basicGrid;

var dropDownSource = ["Albert Einstein", "Niels Bohr"];
var _dropDown;

var _loadButton;
var _UpdateDropDownButton;