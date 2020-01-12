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
var paraOptions = { width: titleWidth };
doc.fontSize(18).font('fonts/Gelasio-Regular.ttf').text(pdfTitle, options);

// 2. Single Paragraph.
doc.fontSize(10).font('fonts/Gelasio-Bold.ttf').text('Paragraph', paraOptions);
var pdfParaText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus elit, finibus non maximus eu, lobortis sit amet elit. Fusce in ligula tristique, scelerisque nunc nec, dignissim ante. Vivamus quis metus malesuada, tristique enim at, feugiat purus. Aenean facilisis sagittis enim ut luctus. Etiam nisi leo, varius sed blandit fringilla, gravida quis velit. Sed ac quam a mi varius pulvinar. Aenean aliquet tincidunt sapien, nec pulvinar nunc finibus a. Vestibulum accumsan tempor enim, congue faucibus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu mi quis eros ultrices ultrices. Mauris non leo non nisi tincidunt euismod.

Morbi ultrices erat justo, nec scelerisque neque finibus ut. Nam congue quis orci laoreet venenatis. Maecenas a purus odio. Vestibulum luctus nibh eu fermentum mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam urna massa, gravida at dapibus vitae, aliquam quis ante. Proin nunc lacus, volutpat non nisl sed, malesuada lacinia elit. Pellentesque odio dolor, hendrerit et cursus ut, gravida sit amet metus. Duis porta fringilla diam, eget feugiat justo aliquet eget. Aliquam quis ante quis augue egestas rhoncus. Integer ac augue fermentum, ultricies felis et, pellentesque nunc. Praesent ut lacus eget nibh viverra vehicula. Etiam nec est pharetra, pharetra enim ac, gravida nulla. Proin malesuada nulla eu lorem viverra porttitor.`;
doc.moveDown();
doc.fontSize(8).font('fonts/Gelasio-Regular.ttf').text(pdfParaText);

// 3. Progressive column paragraph's 
doc.moveDown();
doc.fontSize(10).font('fonts/Gelasio-Bold.ttf').text('Progressive Paragraph', paraOptions);
var pdfProgressiveText = ` Quisque egestas orci elementum auctor efficitur. Nulla lacinia a ante nec ornare. Aliquam finibus rutrum dui vel sodales. Sed ut neque convallis quam condimentum tempor non vitae eros. Praesent sem turpis, interdum ac mi sed, interdum tristique orci. Vivamus hendrerit mi rhoncus risus finibus, et laoreet nisl lacinia. Suspendisse iaculis metus quis eleifend fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut mollis varius congue. Maecenas lacinia lobortis eros id semper. Suspendisse aliquam auctor risus ut vestibulum.

Phasellus tincidunt sapien vitae ante ultricies placerat. Vivamus placerat arcu dui, sit amet blandit mauris ornare in. Phasellus lobortis dui neque, vitae finibus arcu rutrum et. In a pretium massa, id accumsan erat. Vivamus sagittis suscipit enim vitae pretium. Suspendisse et eleifend elit, vel laoreet odio. Nulla sagittis luctus velit non elementum. `;
doc.moveDown();
doc.font('fonts/Gelasio-Regular.ttf').text(pdfProgressiveText, {
    columns: 2,
    columnGap: 10,
    height: 100,
    width: 465,
    align: 'justify'
  });

// Finalize PDF file
doc.end();