import * as React from 'react';
import { Box, Tabs, Tab } from "@material-ui/core";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}} style = {{marginTop: '3rem'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="포스트" href = "/" />
        <Tab label="공지사항" href = "notice" />
        <Tab label="홈" href = "/home" />
      </Tabs>
    </Box>
  );
}
