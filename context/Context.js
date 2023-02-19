'use client'
import React, { useState, useEffect } from 'react';
export const Context = React.createContext(); export const MyProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [dataUpdate, setDataUpdate] = useState('');
    const [pinnedList, setPinnedList] = useState([]);

    const addTodoList = (input, pinned, id) => {
        setTodoList([...todoList, { input, pinned, id }]);
        localStorage.setItem('todoList', JSON.stringify([...todoList, { input, pinned, id }]));
    };
    const removeTodoList = (id) => {
        const updatedList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));

    };
    const sendDataForUpdate = (dataToUpdate) => {
        setDataUpdate(dataToUpdate);
    }
    const updateTodoList = (id, input, pinned) => {
        todoList.find((item) => item.id === id ? (item.input = input, item.pinned = pinned) : null)
        
        const updatedList = [...todoList];
        const itemIndex = updatedList.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            updatedList[itemIndex] = {
                id: id,
                input: input,
                pinned: pinned,
            };

            setTodoList(updatedList);
            localStorage.setItem('todoList', JSON.stringify(updatedList));
        }
    };
    const changedPin = (id) => {
        const updatedPins = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, pinned: !todo.pinned };
            }
            return todo;
        });

        setTodoList(updatedPins);
        localStorage.setItem('todoList', JSON.stringify(updatedPins));
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
                setTodoList,
                removeTodoList,
                updateTodoList,
                sendDataForUpdate,
                dataUpdate,
                setDataUpdate,
                changedPin,
                pinnedList,
                setPinnedList
            }}
        >
            {children}
        </Context.Provider>
    );
};