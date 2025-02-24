import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import UIComponent from "sap/ui/core/UIComponent";
 
/**
 * @namespace febrownbaggo.controller
 */
export default class Page2 extends Controller {
 
    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
       
    }
    public onNavBack(): void {
        (this.getOwnerComponent() as UIComponent).getRouter().navTo("RouteHome");
    }
   
}