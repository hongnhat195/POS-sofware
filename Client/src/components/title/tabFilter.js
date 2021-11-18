import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import foodType from "../../foodType";
import { Consumer } from "../products/content";
import Avatar from "@mui/material/Avatar";
export default function TabFilter() {
  const [value1, setValue1] = useState(foodType);
  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };
  return (
    <Consumer>
      {(value) => (
        <Box sx={{ flexGrow: 1, maxWidth: 1150, bgcolor: "background.paper" }}>
          <Tabs
            value={value1}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
          >
            {foodType.map((item) => {
              return (
                <Tab
                  className="m-3"
                  id="food-filter"
                  icon={<Avatar alt="test avatar" src={item.src} />}
                  onClick={() => value.filterItem(item.name)}
                  label={item.name}
                />
              );
            })}
          </Tabs>
        </Box>
      )}
    </Consumer>
  );
}
