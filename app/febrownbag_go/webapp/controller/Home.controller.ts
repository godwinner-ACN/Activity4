import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import UIComponent from "sap/ui/core/UIComponent";
import Button from "sap/m/Button";
import Dialog from "sap/m/Dialog";
import Text from "sap/m/Text";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace febrownbaggo.controller
 */
export default class Home extends Controller {
 
    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const oData = {
            "value": [
                {
                    "AGE": "18",
                    "NAME": "Robert",
                    "EVENT": "Swimming"
                },
                {
                    "AGE": "28",
                    "NAME": "Ephraim",
                    "EVENT": "Jolenz"
                },
                {
                    "AGE": "24",
                    "NAME": "Brent",
                    "EVENT": "Scatter"
                },
                {
                    "AGE": "23",
                    "NAME": "Godwin",
                    "EVENT": "Volleyball"
                },
                {
                    "AGE": "30",
                    "NAME": "Michella",
                    "EVENT": "Table Tennis"
                },
                {
                    "AGE": "19",
                    "NAME": "Maria Fe",
                    "EVENT": "Tetris"
                },
            ]
        };
   
        const oModel = new JSONModel(oData);
        this.getView()?.setModel(oModel);
        const jsonData = new JSONModel("model/Data.json");
        const oVizFrame = this.getView()?.byId("idVizFrame");
        oVizFrame?.setModel(jsonData);
    }
    public onButtonPress(): void {
        // Create a new dialog box
        const oDialog = new Dialog({
            title: "Hello World",
            content: new Text({
                text: "\n \u00A0\u00A0\u00A0 Good day to you!"
            }),
            beginButton: new Button({
                text: "OK",
                press: () => {
                    oDialog.close(); // Close the dialog when the "OK" button is pressed
                }
            }),
            afterClose: () => {
                oDialog.destroy(); // Destroy the dialog to clean up resources
            }
        });
 
        // Open the dialog box
        oDialog.open();
    }
    public onButtonPress1(): void {
        const router = UIComponent.getRouterFor(this);
        router.navTo("RoutePage2");
        }
   
}