import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';

const data1 = [

];

const data2 = [
  { label: '1', value: 100 },
  { label: '2', value: 300 },
  { label: '3', value: 100 },
  { label: '4', value: 80 },
  { label: '5', value: 40 },
  { label: '6', value: 30 },
  { label: '7', value: 50 },
  { label: '8', value: 100 },
  { label: '9', value: 200 },
  { label: '10', value: 150 },
  { label: '11', value: 50 },
];

const Pieanimation = () => {

  const [radius, setRadius] = React.useState(40);
  const [itemNb, setItemNb] = React.useState(5);

  return (
    <Box sx={{ width: '100%' }}>
      <PieChart
        height={200}
        series={[
          { data: data1, outerRadius: radius },
          {
            data: data2.slice(0, itemNb),
            innerRadius: radius,
            arcLabel: (params) => params.label ?? '',
          },
        ]}
      />
    </Box>
  );
}
export default Pieanimation;