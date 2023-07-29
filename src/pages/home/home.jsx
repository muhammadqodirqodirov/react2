import React from 'react';
import {Layout} from "../../layout/layout";
import { About } from '../about/about';
import {Sign} from "../sign"
import {Work} from "../work"
import {User} from "../user"
import {End} from "../end"
export const Home = () => {
  return <Layout>
    <About/>
    <Sign/>
    <Work/>
    <User/>
    <End/>
  </Layout>
}
