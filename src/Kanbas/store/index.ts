import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: string[];
}

export interface ModuleState {
  modules: Module[];
  module: Module;

}
export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;