/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */

// This script adds a dialog to the saveRecord entry point that the user must accept in order to save the record.
// Updated version of: https://gist.github.com/abacijson/2f4410ed54c0b5085c1cb015008cf48a

define(['N/ui/dialog'], (dialog) => {
  let finalResult = false;
  let finalResultSet = false;

  const success = (result) => {
    finalResult = result;
    finalResultSet = true;

    if (result) {
      console.log("Confirmation accepted, saving record.");
      const submitBtn = document.querySelector("#submitter");
      submitBtn?.click();
    } else {
      console.log("Confirmation canceled");
    }
  };

  const fail = (reason) => {
    console.log("Confirmation canceled");
    return false;
  };

  const saveRecord = (context) => {
    const FN = "saveRecord";
    try {
      let currentRecord = context.currentRecord;

      if (!finalResultSet) {
        dialog
          .confirm({
            title: "Confirmation",
            message: "Are you sure you want to save this record?",
          })
          .then(success)
          .catch(fail);
      } else {
        finalResultSet = false;
        return finalResult;
      }
    } catch (e) {
      console.log(`${FN} - ${e.message}` || "Unexpected error");
      log.error({
        title: `${FN} error: `,
        details: {
          message: `${FN} - ${e.message}` || "Unexpected error",
        },
      });
    }
  };

  return {
    saveRecord,
  };
});
