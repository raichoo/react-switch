/* eslint-disable import/no-extraneous-dependencies */
import "raf/polyfill";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
