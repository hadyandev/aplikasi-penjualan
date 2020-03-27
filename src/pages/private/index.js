import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "./pengaturan";
import Produk from "./produk";
import Transaksi from "./transaksi";
import Home from "./home";

function Private() {
  return (
    <Switch>
      <Route path="/pengaturan" component={Pengaturan}></Route>
      <Route path="/produk" component={Produk}></Route>
      <Route path="/transaksi" component={Transaksi}></Route>
      <Route component={Home}></Route>
    </Switch>
  );
}
export default Private;
