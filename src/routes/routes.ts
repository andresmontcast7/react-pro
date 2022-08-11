import { Component, lazy, LazyExoticComponent } from "react";
import LazyLayout from "../lazy-layout/LazyLayout";
import NoLazyLoad from "../lazy-layout/NoLazyLoad";

type JSXComponent = ()=> JSX.Element;

interface Route{
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string
}


const LazyLayoutes = lazy(()=> import ( /* webpackChunkName:"LAZY_Layout"*/'../lazy-layout/LazyLayout'));


export const routes:Route[] = [

    {
        to:'/lazylayout/',
        path:'/lazylayout/*',// el path es donde definimos el route que conecta con el componente que queremos rederizar 
        Component:LazyLayoutes,
        name:'lazyLayout'

    },
    {
        to:'/nolazy',
        path:'noLazy',
        Component:NoLazyLoad,
        name:'No LazyLoad'
    }
]