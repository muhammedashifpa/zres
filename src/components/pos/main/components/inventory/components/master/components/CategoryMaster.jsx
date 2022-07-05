import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";

const CategoryMaster = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="row">
      <h5 className="mt-5 ms-3">Category Master</h5>
      <div className="col-5 mt-3 ">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 500,
              borderRadius: 5,
            },
          }}
        >
          <Paper className=" d-flex justify-content-center" elevation={3}>
            <div className="row">
              <div className="col-12 mt-5">
                <span onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <AiOutlineMinusCircle size={25} />
                  ) : (
                    <AiOutlinePlusCircle size={25} />
                  )}
                  <a>
                    <strong className="ms-1">Product Catogory</strong>
                  </a>
                </span>
                {checked && (
                  <List
                    sx={{
                      bgcolor: "background.paper",
                      overflow: "auto",
                      maxHeight: 350,
                      maxWidth: "350px",
                      "& ul": { padding: 0 },
                    }}
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 3, 3, 3, 3, 3].map(
                      (value, index) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                          <ListItem key={index} disablePadding>
                            <ListItemIcon>
                              <BsArrowReturnRight className="ms-3 text-dark" />
                            </ListItemIcon>
                            <ListItemText
                              id={labelId}
                              primary={`Line item ${value + 1}`}
                            />
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                )}
              </div>
            </div>
          </Paper>
        </Box>
      </div>
      <div className="col-7 mt-3">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: 500,
              borderRadius: 5,
            },
          }}
        >
          <Paper elevation={3} />
        </Box>
      </div>
    </div>
  );
};

export default CategoryMaster;
