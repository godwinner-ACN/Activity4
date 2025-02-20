import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace febrownbaggo.controller
 */
export default class Home extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public onButtonPress(): void {
        MessageToast.show("Hello, Godwin!");
    }

}