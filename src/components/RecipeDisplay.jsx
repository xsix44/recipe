    import { Paginator } from 'primereact/paginator';
    import { itemTemplate } from './itemtemplate.jsx';
    import { DataView } from 'primereact/dataview';
    import { useState } from 'react';

   
    export function ReciepeDisplay(props){
        const recipes = props.recipes;
        const paginatorOptions = [12,24,36];

    const [current, setCurrent] = useState(recipes?.slice(0, 6));
const [first, setFirst] = useState(0);
const [rows, setRows] = useState(6);

const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrent(recipes?.slice(event.first, event.first + rows));
};

return (
  <>
  <div className="card">
      <DataView value={current} layout="grid" itemTemplate={itemTemplate} />
      <div className="card">
            <Paginator 
            first={first} rows={rows} totalRecords={recipes?.length} rowsPerPageOptions={[5, 10, 20]} onPageChange={onPageChange} />
        </div>
  </div>
  </>
)
}