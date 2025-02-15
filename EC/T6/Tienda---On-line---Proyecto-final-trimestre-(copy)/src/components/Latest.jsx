import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

export default function Latest(props) {
  return (
    <div>
      {console.log(props)}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={props.props.totalCount / props.props.length} boundaryCount={10} />
      </Box>
    </div>
  );
}
