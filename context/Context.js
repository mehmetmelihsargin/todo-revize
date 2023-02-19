'use client'
import React, { useState, useEffect } from 'react';
export const Context = React.createContext(); export const MyProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [dataUpdate, setDataUpdate] = useState('');
    const [pinnedList, setPinnedList] = useState([]);


    const addTodoList = (input, pinned, id) => {
        setTodoList([...todoList, { input, pinned, id }]);
    };
    const removeTodoList = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };
    const sendDataForUpdate = (dataToUpdate) => {
        setDataUpdate(dataToUpdate);
        console.log(dataUpdate, 'data update on context')
    }
    const updateTodoList = (id, input, pinned) => {
        console.log(id, input, pinned, 'context')
        todoList.find((item) => item.id === id ? (item.input = input, item.pinned = pinned) : null)
    };
    const changedPin = (id) => {
        const updatedPins = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, pinned: !todo.pinned };
            }
            return todo;
        });

        setTodoList(updatedPins);
    };
    useEffect(() => {
        const pinnedTodos = todoList.filter((todo) => todo.pinned);
        setPinnedList(pinnedTodos);
    }, [todoList]);

    return (
        <Context.Provider
            value={{
                addTodoList,
                todoList,
                removeTodoList,
                updateTodoList,
                sendDataForUpdate,
                dataUpdate,
                setDataUpdate,
                changedPin,
                pinnedList
            }}
        >
            {children}
        </Context.Provider>
    );
};