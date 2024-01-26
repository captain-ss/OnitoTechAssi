import React, { Component } from "react";
import "../CSS/DataSetPage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const $ = require("jquery");
$.DataTable = require("datatables.net");
export class Dataset extends Component {
  
  componentDidMount() {
    var buttonCommon = {
      exportOptions: {
          format: {
              body: function ( data, row, column, node ) {
                  // Strip $ from salary column to make it numeric
                  return column === 5 ?
                      data.replace( /[$,]/g, '' ) :
                      data;
              }
          }
      }
    };
    console.log(this.el);
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.props.data,
      columns: [
        { data: "name" },
        { data: "position" },
        { data: "salary" },
        { data: "office" },
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
              <th>position</th>
              <th>salary</th>
              <th>office</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
