import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Pengguna from "./pengguna";
import Toko from "./toko";

function Pengaturan() {
  return (
    <Switch>
      <Route path="/pengaturan/pengguna" component={Pengguna}></Route>
      <Route path="/pengaturan/toko" component={Toko}></Route>

      {/* default path pengaturan adalah ke pengaturan pengguna */}
      <Redirect to="/pengaturan/pengguna"></Redirect>
    </Switch>
  );
}

export default Pengaturan;
