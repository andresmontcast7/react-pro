import { lazy,LazyExoticComponent } from "react"
import LazyPage from "../lazy-load/pages/LazyPage"
import LazyPage3 from "../lazy-load/pages/LazyPage3";
import LazyPage2 from "../lazy-load/pages/LazyPage2";

type JSXComponent = ()=> JSX.Element;
interface Routes {
    to:string,
    path:string,
    Component:JSXComponent |  LazyExoticComponent<JSXComponent>,
    name:string
}


const LazyLoad1 = lazy(()=> import(/* webpackChunkName:"LAZY1"*/ '../lazy-load/pages/LazyPage'));
const LazyLoad2 = lazy(()=> import(/* webpackChunkName:"LAZY2"*/'../lazy-load/pages/LazyPage2'));
const LazyLoad3 = lazy(()=> import(/* webpackChunkName:"LAZY3"*/'../lazy-load/pages/LazyPage3'));


export const routesLazy:Routes[] =[
{
    to:'lazy-1',
    path:'/lazy-1',
    Component:LazyLoad1,
    name:'lazy Load 1'
},
{
    to:'lazy-2',
    path:'/lazy-2',
    Component:LazyLoad2,
    name:'lazy Load 2'
},
{
    to:'lazy-3',
    path:'/lazy-3',
    Component:LazyLoad3,
    name:'lazy Load 3'
}
    
]


