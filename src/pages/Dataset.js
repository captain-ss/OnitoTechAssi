import React, { Component } from "react";
import "../CSS/DataSetPage.css";
const $ = require("jquery");
$.DataTable = require("datatables.net");
export class Dataset extends Component {
  
  componentDidMount() {
    var buttonCommon = {
      exportOptions: {
        format: {
          body: function (data, row, column, node) {
            // Strip $ from salary column to make it numeric
            return column === 5 ? data.replace(/[$,]/g, "") : data;
          },
        },
      },
    };
    this.$el = $(this.el);
    console.log(this.$el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        { data: "name",defaultContent: "" },
        { data: "dateOfBirthorAge" ,defaultContent: ""},
        { data: "mobile" ,defaultContent: ""},
        { data: "sex" ,defaultContent: ""},
        { data: "GovermentIssueID",defaultContent: "" },
        { data: "GovermentIssueIDType",defaultContent: "" },
        { data: "countrySelected", defaultContent: "" },
        { data: "City", defaultContent: "" },
        { data: "State", defaultContent: "" },
        {
          data: "Address",

          defaultContent: "",
        },
      ],

      buttons: [
        $.extend(true, {}, buttonCommon, {
          extend: "copyHtml5",
        }),
        $.extend(true, {}, buttonCommon, {
          extend: "excelHtml5",
        }),
        $.extend(true, {}, buttonCommon, {
          extend: "pdfHtml5",
        }),
      ],
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="dataSet_container">
        
        <table className="display" width="100%" ref={(el) => (this.el = el)}>
          <thead>
            <tr>
              <th>name</th>
              <th>dateOfBirthorAge</th>
              <th>mobile</th>
              <th>sex</th>
              <th>GovermentIssueID</th>
              <th>GovermentIssueIDType</th>
              <th>countrySelected</th>
              <th>City</th>
              <th>State</th>
              <th>Address</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
