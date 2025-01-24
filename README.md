This ClientScript adds a dialog to the saveRecord entry point in NetSuite that the user must accept in order to save the record. 

 - If the user clicks **OK**, the submit button is clicked to save the record.
 - If the user clicks **Cancel**, the dialog closes and the record is not saved.

The saveRecord function is executed just before the record is saved, allowing for validations or confirmations to be requested from the user.

![Save Record Dialog](https://raw.githubusercontent.com/FJG309/Netsuite-Save-Record-Dialog/refs/heads/main/save_record.png)
