import { Box } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import React from 'react';


const data=[
  {
    year:2019,
    spain:600,
    germany:1200,
    france:1300
  },
  {
    year:2020,
    spain:791,
    germany:2345,
    france:7650
  },
  {
    year:2021,
    spain:400,
    germany:2000,
    france:7009
  },
    {
    year:2022,
    spain:400,
    germany:2000,
    france:7009
  },
  {
    year:2023,
    spain:400,
    germany:2000,
    france:7009
  },


  
]


const Bar=()=> {
  return (
        <Box sx={{height:"75vh"}}>
 <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        keys={[
          'spain',
          'germany',
          'france'
        ]}
        colors={{ scheme: 'dark2' }}
        indexBy="year"
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: 'year (indexBy)', legendOffset: 32 }}
        axisLeft={{ legend: 'salary/month', legendOffset: -50 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
    </Box>
  );

}
export default Bar;

