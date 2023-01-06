// import * as React from 'react';
// // import Box from '@mui/material/Box';
// import LinearProgress from '@mui/material/LinearProgress';
// export default function LinearIndeterminate() {
//   return (
//       <LinearProgress color="success" />
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 1.5 * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color='success' variant="determinate" value={progress} />
    </Box>
  );
}