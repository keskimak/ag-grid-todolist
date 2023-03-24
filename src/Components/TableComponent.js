import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import React from "react";


export default function TableComponent(props) {

    const mycellrenderer = () => {
        return (
            <button>delete</button>
        )
    }
    const columns = [
        { headerName: "Description", field: "desc", sortable: true, filter: true },
        { field: "date", sortable: true, filter: true },
        {
            field: "priority", sortable: true, filter: true, cellStyle: params => params.value === 'high' ? { color: 'red' } : { color: 'black' }
        },{cellRenderer: mycellrenderer}
    ];


    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: 'auto', margin: 'auto', padding: 10 }}>
            <AgGridReact
                ref={props.gridRef}
                onGridReady={params => props.gridRef.current = params.api}
                rowSelection="single"
                columnDefs={columns}
                rowData={props.todos}
                onRowClicked={props.deleteTodo}

            >

            </AgGridReact>


        </div>

    )
}