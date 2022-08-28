import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


const fake_data = [
    {   id:1,
        name: 'filfil',
        type_id: 'matiere_premiere',
        type:'matiere premiere',
        price: '5dt',
        quantity:'100',
        unit: 'g',        
        number_of_variants:5  
    },

        {   id:2,
        name: 'jombon',
        type_id: 'matiere_premiere',
        type:'matiere premiere',
        price: '2dt',
        quantity:'100',
        unit: 'g',        
        number_of_variants:10  
    },
        
        {   id:3,
        name: 'tapas en jombon ',
        type_id: 'matiere premiere',
        price: '70dt',
        quantity:'1',
        unit: 'tapas',        
        number_of_variants:2  
    },
]

interface ConfigType{
    name: string,
    type_id: string,
    price: number,
    quantity: number,
    unit: string,
    number_of_variants?:number
}

interface data { config:ConfigType }





function TreeView() {
    // const data = props.data
    // const columns = props.columns
       
  
    return (
      <div className='tree_view__container'>
      
      </div>
  )
}

export default TreeView