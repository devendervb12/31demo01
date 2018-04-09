sap.ui.controller("view.Page1", {

	// it is a life cycle method
	onInit : function(){
		//this // myself - controller
		var oip = this.getView().byId("idIp");
		oip.setValue("Surender");
		
		var oLabel = this.getView().byId("idLabel");
		oLabel.setText("Role");
		
	}

});