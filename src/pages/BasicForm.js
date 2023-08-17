import React from "react";
import { Formik, Field, Form } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../reducers/todoStore";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AccountMenu from "../AccountMenu";

const BasicForm = () => {
  const todos = useSelector((state) => state.todoManager.value);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <Container maxWidth="sm">
      <AccountMenu />
      <h1>TODO</h1>
      <Formik
        initialValues={{
          task: "",
        }}
        onSubmit={(values) => {
          dispatch(addTodo(values));
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="task" name="task" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <TableContainer>
        <h2>Current Todos</h2>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Todo Name</TableCell>
              <TableCell>Delete Todo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todoItem, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{todoItem.task}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        dispatch(removeTodo(index));
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BasicForm;
