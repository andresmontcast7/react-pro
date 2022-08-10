import { Component, lazy, LazyExoticComponent } from "react";
import { LazyPage } from "../lazy-load/pages/LazyPage";
import { LazyPage2 } from "../lazy-load/pages/LazyPage2";
import { LazyPage3 } from "../lazy-load/pages/LazyPage3";


type JSXComponent = ()=> JSX.Element;

interface Route{
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}


const Lazy1 = lazy(()=> import ( /* webpackChunkName:"LAZY_PAGE1"*/'../lazy-load/pages/LazyPage'));
const Lazy2 = lazy(()=> import (/* webpackChunkName:"LAZY_PAGE2"*/'../lazy-load/pages/LazyPage2'));
const Lazy3 = lazy(()=> import (/* webpackChunkName:"LAZY_PAGE3"*/'../lazy-load/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component:Lazy1,
        name:'Lazy 1'
    },
    {
        to:"/lazy2",
        path:'lazy2',
        Component:Lazy2,
        name:'Lazy 2'
    },
    {
        to:"/lazy3",
        path:'lazy3',
        Component:Lazy3,
        name:'Lazy 3'
    }
]