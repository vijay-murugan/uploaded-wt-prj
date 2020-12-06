import React from 'react';
import { Article } from './article';
import '../index.css'
import  MyTaskList from './My-Task-list';
import { NavigationBar } from './NavigationBar';


export const Review = () => ( 
<><NavigationBar/>
    <div classname="mainpage"><Article />
    <hr />

        <MyTaskList />
    </div>
    </>
)