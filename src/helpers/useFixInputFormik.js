import { useEffect } from "react";

export default function useFixInputFormik(ref, text) {
    useEffect(() => {
        const fixText = () => {
            // Initialize
            var iCaretPos = 0;

            // IE Support
            if (document.selection) {
                // Set focus on the element
                ref.current.focus();

                // Create a selection from current position of caret to the end of text
                var oSel = document.selection.createRange();
                oSel.moveStart("character", -ref.current.value.length);

                // The caret position is 1 less than the text length
                iCaretPos = oSel.text.length;
            }

            // Firefox support
            else if (ref.current.selectionStart || ref.current.selectionStart == '0')
                iCaretPos = ref.current.selectionDirection == 'backward' ? ref.current.selectionStart : ref.current.selectionEnd;

            // // Set the textarea value to: text before caret + the inserted text + text after caret
            // ref.current.value = texttt.substring(0, iCaretPos) + text + texttt.substring(iCaretPos, texttt.length);

            // // Set the caret position to the end of the inserted text
            // ref.current.selectionStart = ref.current.selectionEnd = iCaretPos + text.length;

            // Return results
            return iCaretPos;
        }
        fixText();
    }, [ref]);
}

// function doGetCaretPosition(oField) {

//     // Initialize
//     var iCaretPos = 0;

//     // IE Support
//     if (document.selection) {

//         // Set focus on the element
//         oField.focus();

//         // To get cursor position, get empty selection range
//         var oSel = document.selection.createRange();

//         // Move selection start to 0 position
//         oSel.moveStart('character', -oField.value.length);

//         // The caret position is selection length
//         iCaretPos = oSel.text.length;
//     }

//     // Firefox support
//     else if (oField.selectionStart || oField.selectionStart == '0')
//         iCaretPos = oField.selectionDirection == 'backward' ? oField.selectionStart : oField.selectionEnd;

//     // Return results
//     return iCaretPos;
// }