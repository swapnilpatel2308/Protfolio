document.getElementById("resumebutton").addEventListener("click", function() {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    var pdfPath = 'resume/Swapnil_Patel_Resume.pdf';

    // Create a temporary <a> element
    var link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'your-pdf-filename.pdf'; // Specify the desired filename for the downloaded file

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically trigger the click event on the link
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  });