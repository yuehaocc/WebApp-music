import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../view/Home';
import Recommend from '../view/Recommend';
import Singer from '../view/Singer';
import Rank from '../view/Rank';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"} />
        )
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singer",
        component: Singer,
      },
      {
        path: "/rank",
        component: Rank,
      }
    ]
  }
]