const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere to a file.
doc.pipe(fs.createWriteStream('./template_1.pdf'));

// 1.  Create a large heading with a large font from google.
// Google font: https://fonts.googleapis.com/css?family=Gelasio&display=swap
var pdfTitle = 'Experiments with PDKFit';
var docWidth = doc.x, docHeight = doc.y, titleHeight = 300, titleWidth = 400;
var options = { width: titleWidth, align: 'center', baseline: 'top', underline: 'underline' };
doc.fontSize(18).font('fonts/Gelasio-Regular.ttf').text(pdfTitle, options);

// 2. Single Paragraph.
doc.moveDown();
var pdfParaText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus elit, finibus non maximus eu, lobortis sit amet elit. Fusce in ligula tristique, scelerisque nunc nec, dignissim ante. Vivamus quis metus malesuada, tristique enim at, feugiat purus. Aenean facilisis sagittis enim ut luctus. Etiam nisi leo, varius sed blandit fringilla, gravida quis velit. Sed ac quam a mi varius pulvinar. Aenean aliquet tincidunt sapien, nec pulvinar nunc finibus a. Vestibulum accumsan tempor enim, congue faucibus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu mi quis eros ultrices ultrices. Mauris non leo non nisi tincidunt euismod.

Morbi ultrices erat justo, nec scelerisque neque finibus ut. Nam congue quis orci laoreet venenatis. Maecenas a purus odio. Vestibulum luctus nibh eu fermentum mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam urna massa, gravida at dapibus vitae, aliquam quis ante. Proin nunc lacus, volutpat non nisl sed, malesuada lacinia elit. Pellentesque odio dolor, hendrerit et cursus ut, gravida sit amet metus. Duis porta fringilla diam, eget feugiat justo aliquet eget. Aliquam quis ante quis augue egestas rhoncus. Integer ac augue fermentum, ultricies felis et, pellentesque nunc. Praesent ut lacus eget nibh viverra vehicula. Etiam nec est pharetra, pharetra enim ac, gravida nulla. Proin malesuada nulla eu lorem viverra porttitor.`;
doc.fontSize(8).text(pdfParaText);


// Finalize PDF file
doc.end();