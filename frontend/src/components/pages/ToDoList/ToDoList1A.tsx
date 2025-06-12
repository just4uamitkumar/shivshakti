import {
  Box,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import TypoGraphy from "../../common/Typography";
import CustomBtn from "../../common/Button";

const ToDoList1A: React.FC = () => {
  const [inputItem, setInputItem] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

   const handleDelete = (item:string) => {
    const newArr = todoList.filter((todo) => todo !== item);
    setTodoList(newArr);
  };

  return (
    <>
      <Grid spacing={2} className="p-3">
        <Box className="p-1">
          <TypoGraphy variant="h2" component={"h2"}>
            {"To Do List 1 A"}
          </TypoGraphy>
        </Box>
        <Divider />

        <Box className="p-3">
          <Grid size={12}>
            <Stack flexDirection="row" gap={2} alignItems="center">
              <TextField
                label="Add Item"
                variant="outlined"
                value={inputItem}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputItem(e.target.value)
                }
              />
              <CustomBtn
                text="Add Value"
                variant="contained"
                className="primary-btn"
                onClick={() => {
                  setTodoList([...todoList, inputItem]);
                  setInputItem("");
                }}
              />
            </Stack>
          </Grid>
          <Grid size={12} className={"pb-3"}>
            <List>
              {todoList.map((item, index) => (
                <ListItem key={index}>
                  <Checkbox
                    name={item}
                    checked={checkedItems[item] || false}
                    onChange={handleChange}
                  />
                  <ListItemText primary={item} />

                  {checkedItems[item] && (
                    <CustomBtn
                      text="Delete"
                      variant="contained"
                      className="cancel-btn sm-btn"
                      onClick={() => handleDelete(item)}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ToDoList1A;
