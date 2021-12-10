//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


import { lazy } from "react"
import { LazyExoticComponent } from 'react';
import { NoLazy } from "../01-lazyload/pages/NoLazy";

 type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
    children?: Route[]
}

//  const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));



export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "lazyload" */ '../01-lazyload/layout/LazyLayout')),
        name: 'Lazyloading Nested'
    },
    {
        path:'/no-lazy',
        Component: NoLazy,
        name:'No Lazy Loading'
    }
]

